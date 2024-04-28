import type { APIRoute } from 'astro';
import { t } from 'astro-i18n';

const manifest = {
  name: t('site.title'),
  short_name: t('site.title'),
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  display: 'standalone',
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
};
