const fs = require('node:fs');
const path = require('node:path');
const sharp = require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(__dirname, '..');
(async () => {
 let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
 if (html.includes('src="assets/webp/')) throw new Error('Page is already optimized. Use original paths from image-optimization.json to regenerate assets; do not recompress WebP outputs.');
 const tags = [...html.matchAll(/<img\b[^>]*>/g)].map(m => m[0]);
 const report = [];
 for (const tag of tags) {
  const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
  if (!src || /^(https?:|data:)/.test(src)) continue;
  const input = path.join(root, src);
  const meta = await sharp(input).metadata();
  const avatar = tag.includes('fb-avatar');
  const preview = src.includes('no-screen-led');
  const review = src.includes('demo-video');
  const gift = src.includes('gift-shower');
  const colors = /(?:xanh-luc|xanh-lam|mau-do)/.test(src);
  const hero = src.includes('hero-');
  const max = avatar ? 420 : preview ? 240 : review ? 630 : gift ? 720 : colors ? 900 : 1254;
  const widths = [...new Set((avatar ? [80,420] : preview ? [160,240] : review ? [420,630] : [480,800,max]).map(w=>Math.min(w,max,meta.width)))].sort((a,b)=>a-b);
  const base = path.basename(src, path.extname(src));
  fs.mkdirSync(path.join(root, 'assets/webp'), {recursive:true});
  const variants = [];
  for (const width of widths) {
   const output = `assets/webp/${base}-${width}.webp`;
   const info = await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality:85,effort:6}).toFile(path.join(root,output));
   variants.push({src:output,width:info.width,height:info.height,bytes:info.size});
  }
  const largest = variants.at(-1);
  const sizes = avatar ? '(max-width: 700px) 40px, 210px' : preview ? '76px' : review ? '210px' : gift ? '360px' : colors ? '(max-width: 500px) calc(100vw - 48px), (max-width: 700px) calc((100vw - 60px) / 3), 290px' : hero ? '(max-width: 700px) calc(100vw - 40px), 660px' : src.includes('use-four') ? '(max-width: 700px) calc(100vw - 40px), 660px' : '(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 88px) / 2), 526px';
  let replacement = tag.replace(/\bsrc="[^"]+"/, `src="${largest.src}"`);
  replacement = replacement.replace(/\s(?:srcset|sizes|decoding|loading)="[^"]*"/g,'');
  replacement = replacement.replace(/\s*\/?>(\s*)$/, `\n            srcset="${variants.map(v=>`${v.src} ${v.width}w`).join(', ')}"\n            sizes="${sizes}"\n            decoding="async"\n            loading="${hero?'eager':'lazy'}"\n          />`);
  html = html.replace(tag, replacement);
  report.push({original:src,originalBytes:fs.statSync(input).size,variants});
 }
 fs.writeFileSync(path.join(root,'index.html'),html);
 fs.writeFileSync(path.join(root,'artifacts/image-optimization.json'),JSON.stringify(report,null,2));
 const before=report.reduce((n,r)=>n+r.originalBytes,0),after=report.reduce((n,r)=>n+r.variants.at(-1).bytes,0);
 console.log(JSON.stringify({images:report.length,before,after,reduction:((1-after/before)*100).toFixed(1)+'%'},null,2));
})();
