// Gallery data for /photography: album info from src/data/gallery.json joined with
// image sizes from src/data/gallery-manifest.json (written by scripts/build-gallery.mjs).
import config from '../data/gallery.json';
import manifest from '../data/gallery-manifest.json';

const WIDTHS = [640, 1280, 2048];

function photoUrls(slug, name) {
  const src = (w) => `/images/gallery/${slug}/${name}-${w}.webp`;
  return {
    thumb: src(640),
    full: src(2048),
    srcset: WIDTHS.map((w) => `${src(w)} ${w}w`).join(', '),
  };
}

export const albums = config.albums.map((album, i) => {
  const sizes = Object.fromEntries((manifest[album.slug] ?? []).map((p) => [p.file, p]));
  const photos = album.photos
    .filter((p) => sizes[p.file])
    .map((p, j) => {
      const { name, width, height } = sizes[p.file];
      const id = `${album.slug}-${String(j + 1).padStart(2, '0')}`;
      const urls = photoUrls(album.slug, name);
      // what GalleryLightbox reads from data-slide
      const slide = JSON.stringify({ id, src: urls.full, srcset: urls.srcset, w: width, h: height, caption: p.caption || '', album: album.title });
      return { ...p, id, name, width, height, ratio: width / height, index: j, slide, ...urls };
    });
  const cover = photos.find((p) => p.file === album.cover) ?? photos[0];
  return { ...album, number: String(i + 1).padStart(2, '0'), photos, cover };
});

// "light" | "dark" | "auto" (auto = by the visitor's clock, like the homepage; see GalleryThemeScript)
export const themeSetting = ['light', 'dark', 'auto'].includes(config.theme) ? config.theme : 'light';
export const theme = themeSetting === 'dark' ? 'dark' : 'light';   // server-rendered default

export const totalPhotos = albums.reduce((n, a) => n + a.photos.length, 0);
