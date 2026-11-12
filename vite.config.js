import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({server:{port:5173,strictPort:true},build:{rollupOptions:{input:{main:resolve(import.meta.dirname,'index.html'),panel:resolve(import.meta.dirname,'panel.html')}}}});
