const {chromium}=require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 try {
 for(const id of ['orderForm','inlineOrderForm']) for(const mode of ['success','http','rejected','network']) {
  const p=await b.newPage(); await p.route('https://**',r=>r.abort());
  await p.addInitScript(()=>{window.events=[];window.requests=0;window.fbq=(...args)=>events.push(args);window.fetch=()=>{requests++;return new Promise((resolve,reject)=>{window.finishRequest=(mode)=>{if(mode==='network')reject(new Error('network'));else resolve(new Response(JSON.stringify({result:mode==='rejected'?'error':'success'}),{status:mode==='http'?500:200}));};});};});
  await p.goto('file:///E:/goi_ngu/index.html');
  if(id==='orderForm')await p.locator('#nut-mua-so-1').click();
  for(const formId of ['orderForm','inlineOrderForm']) {
   const f=p.locator('#'+formId);
   await f.locator('[name=fullname]').evaluate(el=>el.value='Test mock');
   await f.locator('[name=phone]').evaluate(el=>el.value='0912345678');
   await f.locator('[name=address]').evaluate(el=>el.value='Test address mock');
  }
  await p.evaluate(id=>{const form=document.getElementById(id);form.requestSubmit();form.requestSubmit();document.getElementById(id==='orderForm'?'inlineOrderForm':'orderForm').requestSubmit();},id);
  assert.equal(await p.evaluate(()=>requests),1);
  assert.equal(await p.evaluate(()=>events.filter(e=>e[1]==='Purchase').length),0);
  await p.evaluate(mode=>finishRequest(mode),mode);
  await p.waitForFunction(id=>!document.getElementById(id).hasAttribute('aria-busy'),id);
  const purchase=await p.evaluate(()=>events.filter(e=>e[1]==='Purchase'));
  assert.equal(purchase.length,mode==='success'?1:0);
  console.log(id,mode,JSON.stringify(purchase));await p.close();
 }
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});
