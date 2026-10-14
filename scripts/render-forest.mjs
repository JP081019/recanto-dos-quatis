import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const preview = process.argv.includes('--preview');
const flight = process.argv.includes('--flight');
const server = createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const filename = process.env.THREE_BUILD_DIR && pathname.startsWith('/node_modules/three/build/')
      ? resolve(process.env.THREE_BUILD_DIR, pathname.split('/').pop())
      : resolve(root, '.' + pathname);
    const allowed = filename.startsWith(root + '\\') || filename.startsWith(root + '/') || (process.env.THREE_BUILD_DIR && filename.startsWith(resolve(process.env.THREE_BUILD_DIR)));
    if (!allowed) { res.writeHead(403).end(); return; }
    const type = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.jpg': 'image/jpeg' }[extname(filename)] || 'application/octet-stream';
    const content = await readFile(filename);
    res.writeHead(200, { 'Content-Type': type }); res.end(content);
  } catch { res.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const port = server.address().port;
let browser;
try {
  browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [name, width, height] of preview ? [['preview', 960, 540]] : [['desktop', 1280, 720], ['mobile', 540, 960]]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    page.on('pageerror', e => console.error(e.message));
    await page.goto(`http://127.0.0.1:${port}/cinema/${flight?'property':'forest'}.html?w=${width}&h=${height}`);
    await page.waitForFunction(() => window.ready, { timeout: 60000 });
    const folder = resolve(root, preview ? `docs/${flight?'flight':'forest'}-preview` : `public/cinema/${flight?'flight/':''}${name}`);
    await mkdir(folder, { recursive: true });
    const frames = preview ? (flight?[0,.5,1,1,1]:[0,.5,.85]) : Array.from({ length: 72 }, (_, i) => i / 71);
    for (let i = 0; i < frames.length; i++) {
      const output = resolve(folder, `${String(i).padStart(3, '0')}.webp`);
      if (process.argv.includes('--resume')) {
        try { await access(output); continue; } catch {}
      }
      await page.evaluate(({progress,selection}) => window.renderFrame(progress,selection), {progress:frames[i],selection:preview&&flight&&i>2?String(i-2).padStart(2,'0'):'overview'});
      const bytes = await page.screenshot();
      await sharp(bytes).webp({ quality: 78 }).toFile(output);
    }
    await page.close(); console.log(`${name}: ${frames.length} frames, ${width}x${height}`);
  }
  if (!preview) await writeFile(resolve(root, `public/cinema/${flight?'flight/':''}manifest.json`), JSON.stringify({ frames: 72, desktop: [1280,720], mobile: [540,960], type:flight?'property-flight':'three-prototype', ...(flight?{scene:'src/three/property-scene.mjs',photography:false}:{photo:'/images/img1.jpg'}) }, null, 2));
} finally { await browser?.close(); await new Promise(done => server.close(done)); }
