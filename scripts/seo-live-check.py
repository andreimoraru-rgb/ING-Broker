#!/usr/bin/env python3
"""Verificare live SEO/GEO pentru easigurari.com si ingbroker.md.

Citeste HTML-ul brut (ce vad Google si crawlerele AI, fara JavaScript) pentru
fiecare URL din scripts/seo-live-check-urls.txt si raporteaza: cod HTTP,
redirect, title, meta description, canonical, H1, JSON-LD, hreflang, statutul
(CNPF / Banca Nationala a Moldovei) si formulari interzise.

Doar biblioteca standard Python, fara dependinte. Nu modifica nimic pe site.
Iesire: Markdown (stdout si $GITHUB_STEP_SUMMARY) + seo-live-report.json.
"""

import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser

URLS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "seo-live-check-urls.txt")
UA = "Mozilla/5.0 (compatible; INGBrokerSEOCheck/1.0; +https://www.ingbroker.md/)"
TIMEOUT = 30

# Formulari care nu trebuie sa apara (Legea 62/2022, Legea 106/2022 art. 12 alin. (8), reguli de brand).
FORBIDDEN = [
    "cel mai ieftin", "cel mai bun", "garantat", "de elită", "de elita",
    "AMP Broker", "INTACT", "pretul mai scazut", "prețul mai scăzut",
    "самый дешёвый", "самый дешевый", "гарантировано",
]
STATUS_BNM = ["Banca Națională a Moldovei", "Banca Nationala a Moldovei", "Национальн"]


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.meta = {}
        self.canonical = []
        self.hreflang = []
        self.h1 = []
        self.jsonld_raw = []
        self._in = None
        self._buf = ""
        self._skip = 0
        self.text_parts = []

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        if tag == "title":
            self._in, self._buf = "title", ""
        elif tag == "h1":
            self._in, self._buf = "h1", ""
        elif tag == "script":
            if a.get("type", "").lower() == "application/ld+json":
                self._in, self._buf = "jsonld", ""
            else:
                self._skip += 1
        elif tag in ("style", "noscript"):
            self._skip += 1
        elif tag == "meta":
            key = (a.get("name") or a.get("property") or "").lower()
            if key:
                self.meta[key] = a.get("content", "")
        elif tag == "link":
            rel = a.get("rel", "").lower()
            if rel == "canonical":
                self.canonical.append(a.get("href", ""))
            elif rel == "alternate" and a.get("hreflang"):
                self.hreflang.append(f'{a["hreflang"]}={a.get("href", "")}')

    def handle_endtag(self, tag):
        if tag == "title" and self._in == "title":
            self.title, self._in = self._buf.strip(), None
        elif tag == "h1" and self._in == "h1":
            self.h1.append(" ".join(self._buf.split()))
            self._in = None
        elif tag == "script":
            if self._in == "jsonld":
                self.jsonld_raw.append(self._buf)
                self._in = None
            elif self._skip:
                self._skip -= 1
        elif tag in ("style", "noscript") and self._skip:
            self._skip -= 1

    def handle_data(self, data):
        if self._in:
            self._buf += data
        if not self._skip and self._in != "jsonld":
            self.text_parts.append(data)


def jsonld_types(raw_blocks):
    types, errors = [], 0

    def walk(node):
        if isinstance(node, dict):
            t = node.get("@type")
            if t:
                types.extend(t if isinstance(t, list) else [t])
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    for block in raw_blocks:
        try:
            walk(json.loads(block))
        except Exception:
            errors += 1
    return sorted(set(types)), errors


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "ro,ru;q=0.8"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            body = r.read().decode(r.headers.get_content_charset() or "utf-8", "replace")
            return r.status, r.geturl(), r.headers.get("Content-Type", ""), body, None
    except urllib.error.HTTPError as e:
        return e.code, url, e.headers.get("Content-Type", "") if e.headers else "", "", None
    except Exception as e:  # noqa: BLE001
        return None, url, "", "", f"{type(e).__name__}: {e}"


def check_redirect(url):
    """Primul hop, fara a urma redirectul (pentru varianta fara www)."""

    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None

    opener = urllib.request.build_opener(NoRedirect)
    try:
        r = opener.open(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=TIMEOUT)
        return r.status, r.headers.get("Location", "")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location", "") if e.headers else ""
    except Exception as e:  # noqa: BLE001
        return None, f"{type(e).__name__}: {e}"


def analyse(url):
    status, final, ctype, body, err = fetch(url)
    res = {"url": url, "status": status, "final_url": final, "content_type": ctype, "error": err}
    if err or not body:
        return res
    if "html" not in ctype.lower():
        lines = body.splitlines()
        res.update({"kind": "text", "lines": len(lines), "first_lines": lines[:6],
                    "has_sitemap_line": any(l.lower().startswith("sitemap:") for l in lines),
                    "ai_bots": sorted({b for b in ("GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot")
                                       if b.lower() in body.lower()})})
        if "<urlset" in body or "<sitemapindex" in body:
            res.update({"kind": "sitemap", "loc": body.count("<loc>"), "lastmod": body.count("<lastmod>"),
                        "loc_without_www": len(re.findall(r"<loc>https?://(?!www\.)", body))})
        return res
    p = PageParser()
    p.feed(body)
    text = " ".join(" ".join(p.text_parts).split())
    types, ld_err = jsonld_types(p.jsonld_raw)
    low = body.lower()
    res.update({
        "kind": "html",
        "title": p.title,
        "meta_description": p.meta.get("description", ""),
        "meta_keywords_present": "keywords" in p.meta,
        "meta_abstract": p.meta.get("abstract", ""),
        "canonical": p.canonical,
        "h1_count": len(p.h1),
        "h1": p.h1[:5],
        "jsonld_types": types,
        "jsonld_parse_errors": ld_err,
        "hreflang": p.hreflang,
        "visible_words": len(text.split()),
        "cnpf_count": body.count("CNPF"),
        "bnm_present": any(s.lower() in low for s in STATUS_BNM),
        "supravegheat_present": "supravegheat" in low or "надзор" in low,
        "forbidden_found": [w for w in FORBIDDEN if w.lower() in low],
    })
    return res


def md_row(r):
    if r.get("error"):
        return f"| {r['url']} | EROARE | {r['error']} |"
    if r.get("kind") == "redirect":
        return f"| {r['url']} | {r['status']} | Location: {r['location'] or '-'} |"
    if r.get("kind") == "html":
        notes = [
            f"title: {r['title'][:70] or '-'}",
            f"H1: {r['h1_count']}" + (f" ({r['h1'][0][:50]})" if r['h1'] else ""),
            f"canonical: {r['canonical'][0] if r['canonical'] else 'LIPSA'}",
            f"JSON-LD: {', '.join(r['jsonld_types']) or 'LIPSA'}" + (f" ({r['jsonld_parse_errors']} invalid)" if r['jsonld_parse_errors'] else ""),
            f"CNPF: {r['cnpf_count']}",
            f"BNM: {'da' if r['bnm_present'] else 'nu'}",
            f"cuvinte vizibile: {r['visible_words']}",
        ]
        if r["hreflang"]:
            notes.append(f"hreflang: {len(r['hreflang'])}")
        if r["meta_keywords_present"]:
            notes.append("meta keywords: DA")
        if r["forbidden_found"]:
            notes.append("INTERZIS: " + ", ".join(r["forbidden_found"]))
        return f"| {r['url']} | {r['status']} | {'; '.join(notes)} |"
    if r.get("kind") == "sitemap":
        return f"| {r['url']} | {r['status']} | sitemap: {r['loc']} URL-uri, {r['lastmod']} lastmod, {r['loc_without_www']} fara www |"
    if r.get("kind") == "text":
        extra = f"; Sitemap: {'da' if r['has_sitemap_line'] else 'nu'}; boti AI: {', '.join(r['ai_bots']) or '-'}"
        return f"| {r['url']} | {r['status']} | {r['lines']} linii{extra}; prima: {(r['first_lines'] or [''])[0][:60]} |"
    return f"| {r['url']} | {r['status']} | {r.get('content_type', '')} |"


def main():
    urls, redirects = [], []
    with open(URLS_FILE, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if line.startswith("redirect "):
                redirects.append(line.split(None, 1)[1])
            else:
                urls.append(line)

    results = [analyse(u) for u in urls]
    for u in redirects:
        st, loc = check_redirect(u)
        results.append({"url": u, "kind": "redirect", "status": st, "location": loc,
                        "error": None if st else loc})

    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    md = [f"## Verificare live SEO/GEO ({now})", "", "| URL | HTTP | Constatări |", "| --- | --- | --- |"]
    md += [md_row(r) for r in results]
    report = "\n".join(md)

    print(report)
    with open("seo-live-report.json", "w", encoding="utf-8") as f:
        json.dump({"generated": now, "results": results}, f, ensure_ascii=False, indent=2)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as f:
            f.write(report + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
