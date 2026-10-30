const {chromium}=require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const results=[];
 try {for(const width of [390,1440]){
  const page=await browser.newPage({viewport:{width,height:844},deviceScaleFactor:2});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('https://**',r=>r.abort());
  await page.goto('file:///E:/goi_ngu/index.html');
  await page.locator('.hero-photo img').evaluate(i=>i.decode());
  await page.screenshot({path:`E:/goi_ngu/artifacts/webp-hero-${width}.png`});
  const imgs=await page.locator('img').evaluateAll(async imgs=>{
   const local=imgs.filter(i=>i.getAttribute('src').startsWith('assets/webp/'));
   await Promise.all(local.map(async i=>{i.loading='eager';await i.decode();}));
   return local.map(i=>({src:i.currentSrc,width:i.naturalWidth,displayWidth:i.getBoundingClientRect().width}));
  });
  assert.equal(imgs.length,18);assert.ok(imgs.every(i=>i.width>0&&i.src.endsWith('.webp')));
  assert.equal(await page.locator('.hero-photo img').getAttribute('fetchpriority'),'high');
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert.deepEqual(errors,[]);
  const bytes=imgs.reduce((sum,i)=>sum+fs.statSync(require('node:url').fileURLToPath(i.src)).size,0);
  results.push({viewport:width,dpr:2,bytes,images:imgs});
  await page.locator('.color-comparison').scrollIntoViewIfNeeded();
  await page.screenshot({path:`E:/goi_ngu/artifacts/webp-colors-${width}.png`});
  await page.close();
 }}finally{await browser.close();}
 fs.writeFileSync('E:/goi_ngu/artifacts/webp-browser-report.json',JSON.stringify(results,null,2));
 console.log(results.map(({viewport,bytes})=>({viewport,bytes})));console.log('PASS: 18 images decoded at each viewport; no overflow or JS errors.');
})().catch(e=>{console.error(e);process.exit(1)});
