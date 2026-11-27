import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { shortQuoteUrl, validateShortQuote } from '../src/utils/shortQuote';
const valid={company:'Companie Exemplu SRL',contact:'preview@example.invalid',details:'Backup, MFA și continuitatea activității.'};
assert.deepEqual(validateShortQuote(valid),{});
for(const contact of ['+373 69 526 003','069526003','+44 (20) 1234-5678','test+cyber@example.invalid'])assert.deepEqual(validateShortQuote({...valid,contact}),{},contact);
for(const contact of ['', 'incomplet@', 'fără telefon', '123', '+1234567890123456', 'https://example.invalid'])assert.ok(validateShortQuote({...valid,contact}).contact,contact);
for(const company of ['',' ','a','a'.repeat(121)])assert.ok(validateShortQuote({...valid,company}).company);
assert.deepEqual(validateShortQuote({...valid,company:'  Întreprinderea Știință SRL  ',details:''}),{});
assert.ok(validateShortQuote({...valid,details:'a'.repeat(1601)}).details);
assert.deepEqual(validateShortQuote({...valid,details:'a'.repeat(1600)}),{});
for(const lang of ['ro','ru','en'] as const){
 const values={...valid,company:'Exemplu & Asociere <SRL>',details:'Linia 1\nLinia 2? a=1 & b=2 #fragment'};
 const url=new URL(shortQuoteUrl(values,lang));
 assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/37369526003');assert.deepEqual([...url.searchParams.keys()],['text']);assert.equal(url.hash,'');
 const text=url.searchParams.get('text')!;assert.ok(text.includes(values.company));assert.ok(text.includes(values.contact));assert.ok(text.includes(values.details));assert.ok(!text.includes('undefined'));
}
const page=readFileSync('src/pages/CyberInsurancePage.tsx','utf8');
assert.equal((page.match(/<CyberQuoteForm /g)||[]).length,1);
assert.ok(!page.includes('<footer'), 'The page contact strip must not add a second site footer');
assert.ok(page.includes('cyber-contact-strip'));
assert.ok(page.includes('className="cyber-faq__question"'));
for(const lang of ['ro','ru','en']){
 const file=`dist/_pages/${lang}/servicii/asigurare-cyber-moldova.html`,html=readFileSync(file,'utf8');
 assert.equal((html.match(/id="solicita-oferta"/g)||[]).length,1,file);
 assert.equal((html.match(/<footer\b/g)||[]).length,1,file);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,file);
 assert.ok(html.includes('id="cyber-company"')&&html.includes('id="cyber-contact"')&&html.includes('id="cyber-details"'),file);
 assert.ok(html.includes('href="tel:+37369526003"'),file);
 assert.ok(html.includes(`<html lang="${lang}">`),file);
 assert.ok(!html.includes('noindex'),file);
}
console.log(JSON.stringify({passed:true,validation:'empty, malformed, length, Unicode, email and phone',encoding:'three locales, special characters, single destination',initialHtml:'three locales, one form, one footer, canonical page preserved'}));
