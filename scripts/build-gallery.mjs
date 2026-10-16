// Builds web-ready gallery images for /photography from the originals in public/images/<folder>.
//
//   node scripts/build-gallery.mjs            # only missing sizes
//   node scripts/build-gallery.mjs --force    # rebuild everything
//
// Reads  src/data/gallery.json   (albums: slug, folder, photos[] …)
// Writes public/images/gallery/<slug>/<name>-{640,1280,2048}.webp   (EXIF-rotated, metadata stripped — no GPS)
//        src/data/gallery-manifest.json                              (width/height per photo for layout)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const WIDTHS = [640, 1280, 2048];
const force = process.argv.includes('--force');

const { albums } = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/gallery.json'), 'utf8'));
const manifest = {};

for (const album of albums) {
  const srcDir = path.join(ROOT, 'public/images', album.folder);
  const outDir = path.join(ROOT, 'public/images/gallery', album.slug);
  fs.mkdirSync(outDir, { recursive: true });

  // photos[] in the JSON sets order + captions; if empty, take every JPEG in the folder
  const listed = album.photos?.length
    ? album.photos
    : fs.readdirSync(srcDir).filter((f) => /\.(jpe?g)$/i.test(f)).sort().map((file) => ({ file }));

  manifest[album.slug] = [];
  for (const { file } of listed) {
    const name = path.parse(file).name;
    const input = path.join(srcDir, file);
    const { width, height } = await sharp(input).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
    for (const w of WIDTHS) {
      const out = path.join(outDir, `${name}-${w}.webp`);
      if (!force && fs.existsSync(out)) continue;
      await sharp(input).rotate().resize({ width: Math.min(w, width) }).webp({ quality: w === 640 ? 72 : 80 }).toFile(out);
    }
    manifest[album.slug].push({ file, name, width, height });
    process.stdout.write('.');
  }
  console.log(` ${album.slug}: ${manifest[album.slug].length} photos`);
}

fs.writeFileSync(path.join(ROOT, 'src/data/gallery-manifest.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log('wrote src/data/gallery-manifest.json');
