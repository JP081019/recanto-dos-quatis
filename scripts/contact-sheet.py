from PIL import Image, ImageOps, ImageDraw
from pathlib import Path
root = Path(__file__).resolve().parents[1]
sheet = Image.new('RGB', (1200, 880), '#f5efe4')
draw = ImageDraw.Draw(sheet)
for i, path in enumerate(sorted((root / 'public/images').glob('*.jpg'), key=lambda p: int(p.stem[3:]))):
    with Image.open(path) as source:
        photo = ImageOps.fit(source, (280, 180))
        x, y = 10 + (i % 4) * 300, 10 + (i // 4) * 220
        sheet.paste(photo, (x, y))
        draw.text((x, y + 185), f'{path.name} — {source.width} × {source.height}', fill='#1b3027')
sheet.save(root / 'docs/contact-sheet.jpg')
