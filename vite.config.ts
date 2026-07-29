import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    // NU adauga aici `define` pentru chei API.
    // `define` face substitutie literala la build: valoarea ajunge scrisa in clar
    // in JS-ul public servit de pe ingbroker.md. Blocul eliminat era:
    //   define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }
    // Nu s-a produs scurgere (variabila nu era setata in build-ul Cloudflare,
    // verificat pe bundle-ul de productie la 2026-07-29), dar mecanismul era armat:
    // ar fi fost suficient ca cineva sa adauge GEMINI_API_KEY in Cloudflare Pages
    // -> Environment variables, iar cheia intra automat in bundle la urmatorul build.
    // Uneltele AI interne isi iau acum cheia la runtime - vezi src/utils/aiKey.ts.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
