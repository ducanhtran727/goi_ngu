const { chromium } = require('C:/Users/DUC ANH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let requests = 0;
  let response = { status: 200, body: JSON.stringify({ result: 'success' }), contentType: 'application/json' };
  let delay = 0;
  await page.route('https://script.google.com/**', async route => {
    requests++;
    if (delay) await new Promise(resolve => setTimeout(resolve, delay));
    if (response === 'network') return route.abort('failed');
    return route.fulfill(response);
  });
  await page.goto('file:///E:/goi_ngu/index.html');
  await page.locator('h1').waitFor();
  // Load offscreen lazy images before full-page visual evidence is captured.
  await page.evaluate(async () => {
    await Promise.all([...document.images].map(async image => {
      image.loading = 'eager';
      await image.decode();
    }));
  });
  const viewports = [];
  for (const width of [320, 360, 390, 430, 1440]) {
    await page.setViewportSize({ width, height: width > 1000 ? 1000 : 844 });
    await page.waitForTimeout(150);
    const size = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, brokenImages: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src) }));
    assert.ok(size.scroll <= size.width, `Horizontal overflow at ${width}: ${size.scroll}`);
    assert.deepEqual(size.brokenImages, []);
    viewports.push(size);
    if ([390, 1440].includes(width)) {
      await page.screenshot({ path: `E:/goi_ngu/artifacts/page-${width}.png`, fullPage: true });
      await page.screenshot({ path: `E:/goi_ngu/artifacts/hero-${width}.png` });
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  assert.equal(await page.locator('.color-card').count(), 3);
  for (const src of ['xanh-luc.png', 'xanh-lam.png', 'mau-do.png']) {
    assert.equal(await page.locator(`.color-card img[src="${src}"]`).isVisible(), true);
  }
  await page.locator('#quantity').selectOption('3');
  assert.match(await page.locator('#orderTotal').innerText(), /750[.,]000/);
  await page.locator('#quantity').selectOption('2');
  assert.match(await page.locator('#orderTotal').innerText(), /550[.,]000/);
  await page.locator('#quantity').selectOption('1');
  const submit = page.locator('#orderForm button[type="submit"]');
  await submit.click();
  assert.equal(requests, 0, 'Empty form must not send');
  async function fill() {
    await page.locator('#fullname').fill('Người dùng kiểm thử');
    await page.locator('#phone').fill('0912345678');
    await page.locator('#address').fill('Địa chỉ kiểm thử, không gửi đơn thật');
  }
  await fill();
  await page.locator('#phone').fill('123');
  await submit.click();
  assert.equal(requests, 0, 'Invalid phone must not send');
  await page.locator('#phone').fill('0912345678');
  await page.locator('#fullname').fill('   ');
  await submit.click();
  assert.equal(requests, 0, 'Whitespace name must not send');
  await fill();
  const failures = [
    { status: 500, body: 'Server error', contentType: 'text/plain' },
    { status: 200, body: JSON.stringify({ result: 'error' }), contentType: 'application/json' },
    { status: 200, body: '<html>unknown</html>', contentType: 'text/html' },
    'network'
  ];
  for (const failure of failures) {
    response = failure;
    const before = requests;
    await submit.click();
    await page.waitForFunction(() => !document.querySelector('#orderForm button[type="submit"]').disabled);
    assert.equal(requests, before + 1);
    assert.equal(await page.locator('#formStatus').getAttribute('data-state'), 'error');
    assert.equal(await page.locator('#fullname').inputValue(), 'Người dùng kiểm thử', 'Failed submission must retain data');
  }
  response = { status: 200, body: JSON.stringify({ result: 'success' }), contentType: 'application/json' };
  delay = 400;
  await page.locator('#quantity').selectOption('2');
  const before = requests;
  await submit.click();
  await page.locator('#orderForm').evaluate(form => form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  await page.waitForFunction(() => !document.querySelector('#orderForm button[type="submit"]').disabled);
  assert.equal(requests, before + 1, 'Duplicate submit blocked');
  assert.equal(await page.locator('#fullname').inputValue(), '', 'Confirmed success resets form');
  assert.equal(await page.locator('#quantity').inputValue(), '1');
  assert.match(await page.locator('#orderTotal').innerText(), /296[.,]000/);
  assert.equal(await page.locator('#formStatus').getAttribute('data-state'), 'success');
  assert.deepEqual(errors, []);
  const result = { viewports, checks: ['empty form', 'invalid phone', 'whitespace name', 'HTTP failure', 'business failure', 'unknown response', 'network failure', 'duplicate submission', 'confirmed success and reset'], mockedRequests: requests, pageErrors: errors };
  fs.writeFileSync('E:/goi_ngu/artifacts/verification.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
