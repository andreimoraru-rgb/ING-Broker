// Local verification server for the production function + static build.
import express from 'express';
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { onRequest } from '../functions/[[path]]';
const app = express();
const port = Number(process.env.PORT || 4181);
app.use(async (req, res) => {
  const response = await onRequest({ request: new Request(`http://127.0.0.1:${port}${req.originalUrl}`), env: { ASSETS: { fetch: async request => {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    let target = path.resolve('dist', '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!existsSync(target) && existsSync(target + '.html')) target += '.html';
    if (!target.startsWith(path.resolve('dist') + path.sep) || !existsSync(target)) return new Response('Not found', { status: 404 });
    if (!statSync(target).isFile()) return new Response('Not found', { status: 404 });
    const types: Record<string,string> = { '.html':'text/html; charset=utf-8', '.js':'application/javascript', '.css':'text/css', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.xml':'application/xml' };
    return new Response(readFileSync(target), { headers: { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' } });
  } } } });
  res.status(response.status);
  response.headers.forEach((value,key) => res.setHeader(key,value));
  res.send(Buffer.from(await response.arrayBuffer()));
});
app.listen(port, '127.0.0.1', () => console.log(`Editorial production preview http://127.0.0.1:${port}`));
