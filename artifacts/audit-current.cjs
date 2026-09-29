const {chromium}=require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 let mode='http', requests=0;
 await page.exposeFunction('mockOrderReply',()=>{requests++;return mode;});
 await page.addInitScript(()=>{window.fetch=async()=>{const mode=await window.mockOrderReply();if(mode==='network')throw new TypeError('Mock network failure');return new Response(JSON.stringify({result:mode==='reject'?'error':'success'}),{status:mode==='http'?500:200,headers:{'Content-Type':'application/json'}});};});
 await page.route('https://**',async route=>{
  if(route.request().url().startsWith('https://script.google.com/')){
   requests++; if(mode==='network')return route.abort();
   return route.fulfill({status:mode==='http'?500:200,contentType:'application/json',body:JSON.stringify({result:mode==='reject'?'error':'success'})});
  }return route.abort();
 });
 await page.goto('file:///E:/goi_ngu/index.html');
 const result={initialErrors:[...errors],dom:await page.evaluate(()=>({duplicateIds:[...new Set([...document.querySelectorAll('[id]')].map(e=>e.id))].filter(id=>document.querySelectorAll('[id="'+id+'"]').length>1),inlineAfterReview:document.getElementById('binh-luan-mau').nextElementSibling.id,stickyPresent:!!document.getElementById('stickyBuy')})),viewports:[],prices:[],failures:[]};
 for(const width of [320,390,1440]){await page.setViewportSize({width,height:844});result.viewports.push(await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth})));}
 await page.setViewportSize({width:390,height:844});
 for(const q of ['1','2','3']){await page.locator('#inlineQuantity').selectOption(q);result.prices.push(await page.locator('#inlineOrderTotal').innerText());}
 async function fill(prefix){await page.locator('#'+prefix+'Fullname').fill('Kiểm thử không gửi thật');await page.locator('#'+prefix+'Phone').fill('0912345678');await page.locator('#'+prefix+'Address').fill('Địa chỉ giả lập kiểm thử');}
 await fill('inline');
 for(mode of ['http','network','reject']){await page.locator('#inlineSubmitOrder').click();await page.waitForFunction(()=>!document.getElementById('inlineSubmitOrder').disabled);result.failures.push({mode,status:await page.locator('#inlineFormStatus').textContent(),state:await page.locator('#inlineFormStatus').getAttribute('data-state')});}
 await page.locator('#nut-mua-so-1').click();result.popupOpens=await page.locator('#orderDialog').evaluate(e=>e.open);
 await page.locator('#fullname').fill('Kiểm thử popup');await page.locator('#phone').fill('0912345678');await page.locator('#address').fill('Địa chỉ giả lập kiểm thử');mode='success';
 await page.locator('#submitOrder').click();await page.waitForFunction(()=>!document.getElementById('submitOrder').disabled);
 result.success={thanks:await page.locator('#thankYouDialog').evaluate(e=>e.open),state:await page.locator('#formStatus').getAttribute('data-state'),status:await page.locator('#formStatus').textContent()};
 result.errors=[...new Set(errors)];result.mockedRequests=requests;
 fs.writeFileSync('E:/goi_ngu/artifacts/audit-current.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
