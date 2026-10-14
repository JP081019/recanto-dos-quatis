import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const testUrl=process.env.TEST_URL||'http://localhost:3000';
const qaDir=process.env.QA_OUTPUT||'docs/qa-v2';
await mkdir(qaDir,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
const errors=[];
async function settleCamera(page){await page.waitForFunction(()=>document.querySelector('.live-property canvas')?.dataset.cameraSettled==='true');}
async function explore(page){await page.evaluate(()=>window.scrollTo({top:innerHeight*2,behavior:'instant'}));await page.waitForSelector('.property-explorer.is-active.is-ready');await settleCamera(page);}
async function verifyFlightPixels(page){
  await page.waitForFunction(()=>Number(getComputedStyle(document.querySelector('.forest-canvas')).opacity)===1);
  const hash=()=>page.locator('.forest-canvas').evaluate(canvas=>{
    const sample=document.createElement('canvas');sample.width=64;sample.height=36;
    const context=sample.getContext('2d');context.drawImage(canvas,0,0,64,36);
    let value=2166136261;for(const byte of context.getImageData(0,0,64,36).data)value=Math.imul(value^byte,16777619);
    return value>>>0;
  });
  const initial=await hash();
  await page.evaluate(()=>window.scrollTo({top:innerHeight,behavior:'instant'}));
  await page.waitForFunction(initial=>{
    const sample=document.createElement('canvas');sample.width=64;sample.height=36;
    const context=sample.getContext('2d');context.drawImage(document.querySelector('.forest-canvas'),0,0,64,36);
    let value=2166136261;for(const byte of context.getImageData(0,0,64,36).data)value=Math.imul(value^byte,16777619);
    return (value>>>0)!==initial;
  },initial);
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.waitForFunction(initial=>{
    const sample=document.createElement('canvas');sample.width=64;sample.height=36;
    const context=sample.getContext('2d');context.drawImage(document.querySelector('.forest-canvas'),0,0,64,36);
    let value=2166136261;for(const byte of context.getImageData(0,0,64,36).data)value=Math.imul(value^byte,16777619);
    return (value>>>0)===initial;
  },initial);
}
try{
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
  const response=await page.goto(testUrl,{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await verifyFlightPixels(page);
  await page.screenshot({path:`${qaDir}/desktop-hero.png`});
  assert.equal(await page.locator('h1').count(),1);
  assert.equal(await page.locator('img[src*="/images/"]').evaluateAll(images=>images.every(image=>image.closest('#galeria')!==null)),true);
  await explore(page);
  assert.equal(await page.locator('.live-property canvas').getAttribute('data-camera-position'),'48.000,76.000,82.000');
  await page.screenshot({path:`${qaDir}/desktop-maquette.png`});
  const position=await page.locator('.live-property canvas').getAttribute('data-camera-position');
  await page.locator('[data-marker="01"]').click();await settleCamera(page);
  assert.notEqual(await page.locator('.live-property canvas').getAttribute('data-camera-position'),position);
  await page.getByRole('button',{name:'Conhecer a outra hospedagem'}).click();await settleCamera(page);
  assert.match(await page.locator('.panel-heading').innerText(),/Hospedagem 02/);
  await page.locator('.explorer-panel a[href="#reservas"]').click();
  assert.equal(await page.locator('[name=accommodation]').inputValue(),'02');
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.waitForFunction(()=>!document.querySelector('.property-explorer')?.classList.contains('is-active'));
  await explore(page); // Unmount/re-enter: WebGL cleanup must not disable the next visit.
  await page.locator('.gallery-item').first().click();await page.keyboard.press('ArrowRight');
  assert.match(await page.locator('.lightbox-bottom').innerText(),/2 \/ 13/);
  await page.keyboard.press('Escape');assert.equal(await page.locator('.lightbox').evaluate(d=>d.open),false);
  await page.locator('[name=checkin]').fill('2027-10-20');await page.locator('[name=checkout]').fill('2027-10-19');await page.locator('button[type=submit]').click();
  assert.equal(await page.locator('.message-preview').count(),0);
  await page.locator('[name=checkout]').fill('2027-10-23');await page.locator('button[type=submit]').click();
  assert.match(await page.locator('#message').inputValue(),/20\/10\/2027/);
  assert.match(await page.locator('#message').inputValue(),/Hospedagem 02/);
  for(const width of [390,768,1440]){
    await page.setViewportSize({width,height:900});await page.goto(testUrl,{waitUntil:'networkidle'});
    await verifyFlightPixels(page);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`No overflow at ${width}`);
    await page.screenshot({path:`${qaDir}/hero-${width}.png`});
    await explore(page);
    await page.screenshot({path:`${qaDir}/explorer-${width}.png`});
    const canvas=page.locator('.live-property canvas');
    assert.equal(await canvas.getAttribute('data-camera-position'),width===390?'68.000,105.000,113.000':'48.000,76.000,82.000');
    await page.locator('.property-options button').last().click();await settleCamera(page);
    const button=page.locator('.explorer-panel a[href="#reservas"]');
    await button.scrollIntoViewIfNeeded();assert.ok(await button.isVisible());
    await page.screenshot({path:`${qaDir}/room-${width}.png`});
    if(width===390){await page.locator('.menu-toggle').click();await page.locator('#menu-mobile a[href="#galeria"]').click();assert.equal(await page.locator('#menu-mobile').evaluate(d=>d.open),false);}
  }
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto(testUrl,{waitUntil:'networkidle'});
  await page.waitForSelector('.property-explorer.is-active');
  assert.equal(await page.locator('.forest-canvas').evaluate(c=>getComputedStyle(c).display),'none');
  const fallback=await browser.newPage({viewport:{width:390,height:900},reducedMotion:'reduce'});
  await fallback.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl'||type==='webgl2')return null;return original.call(this,type,...args);};});
  await fallback.goto(testUrl,{waitUntil:'networkidle'});
  assert.match(await fallback.locator('.explorer-panel').innerText(),/não está disponível/);
  await fallback.locator('.property-options button').first().click();
  assert.match(await fallback.locator('.explorer-panel').innerText(),/4 camas de solteiro/);
  await fallback.locator('.explorer-panel a[href="#reservas"]').click();assert.equal(await fallback.locator('[name=accommodation]').inputValue(),'01');await fallback.close();
  assert.equal(errors.length,0,errors.join('\n'));
  console.log('PASS: Canvas pixels advance and reverse, exact shared camera endpoint, both buildings, re-entry, gallery, reservation, desktop/tablet/mobile, reduced motion, no-WebGL fallback and zero browser errors.');
}finally{await browser.close();}
