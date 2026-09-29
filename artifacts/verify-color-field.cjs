const {chromium}=require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const p=await b.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('https://**',r=>r.abort());await p.addInitScript(()=>{window.orders=[];window.fetch=async(url,opts)=>{orders.push([...opts.body.entries()]);return new Response('{"result":"success"}',{status:200});};});await p.goto('file:///E:/goi_ngu/index.html');
for(const inline of [false,true])for(const v of ['no-screen','display']){
if(!inline)await p.locator('#nut-mua-so-1').click();
await p.locator(inline?'#inlineVariant':'#variant').selectOption(v);
await p.locator(inline?'#inlineFullname':'#fullname').fill('Kiểm thử không gửi thật');await p.locator(inline?'#inlinePhone':'#phone').fill('0912345678');await p.locator(inline?'#inlineAddress':'#address').fill('Địa chỉ giả lập kiểm thử');
await p.locator(inline?'#inlineSubmitOrder':'#submitOrder').click();await p.waitForFunction(()=>document.getElementById('thankYouDialog').open);
const colors=await p.evaluate(()=>orders.at(-1).filter(([k])=>k==='color').map(([,v])=>v));assert.deepEqual(colors,[v==='display'?'Có màn hình nhiệt độ':'Không màn hình nhiệt độ']);console.log((inline?'inline':'popup')+' '+v+': '+colors[0]);await p.locator('#closeThankYouDialog').click();
assert.equal(await p.locator('#orderForm [name=color]').inputValue(),'Không màn hình nhiệt độ');assert.equal(await p.locator('#inlineOrderForm [name=color]').inputValue(),'Không màn hình nhiệt độ');}
assert.deepEqual(errors,[]);console.log('PASS 4 mocked payloads, exactly one color field each, reset defaults; no real orders.');await b.close();})().catch(e=>{console.error(e);process.exit(1)});
