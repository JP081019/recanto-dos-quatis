import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root=resolve(import.meta.dirname,'..');
const manifest=JSON.parse(await readFile(resolve(root,'public/cinema/flight/manifest.json'),'utf8'));
const base=process.env.TEST_URL;
const requests=[];
for(const variant of ['desktop','mobile']){
  for(let index=0;index<manifest.frames;index++){
    const path=`/cinema/flight/${variant}/${String(index).padStart(3,'0')}.webp`;
    const bytes=await readFile(resolve(root,'public'+path));
    assert.equal(bytes.toString('ascii',0,4),'RIFF',`Invalid WebP: ${path}`);
    assert.equal(bytes.toString('ascii',8,12),'WEBP',`Invalid WebP: ${path}`);
    requests.push(path);
  }
}
if(base){
  for(let start=0;start<requests.length;start+=6){
    const results=await Promise.allSettled(requests.slice(start,start+6).map(async path=>{
      const response=await fetch(new URL(path,base),{method:'HEAD',signal:AbortSignal.timeout(15000)});
      assert.equal(response.status,200,`Missing deployed frame: ${path}`);
      assert.match(response.headers.get('content-type')||'',/^image\/webp/,`Wrong response type: ${path}`);
    }));
    const failure=results.find(result=>result.status==='rejected');
    if(failure)throw failure.reason;
  }
  const response=await fetch(new URL('/cinema/flight/manifest.json',base));
  assert.equal(response.status,200,'Missing deployed manifest');
  assert.deepEqual(await response.json(),manifest,'Deployment manifest differs from source');
}
console.log(`PASS: ${requests.length} valid existing WebP frames${base?', all served with HTTP 200 and matching manifest':''}.`);
