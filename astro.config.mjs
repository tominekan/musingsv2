import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Code colors from the design canvas (the tk-* classes on the Post artboard).
const musingsCode = {
  name: 'musings',
  type: 'dark',
  colors: { 'editor.background': '#1E1A2B', 'editor.foreground': '#EEEAF6' },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#A39CB8', fontStyle: 'italic' } },
    { scope: ['keyword', 'storage', 'storage.type', 'storage.modifier', 'keyword.control'], settings: { foreground: '#FF9D85' } },
    { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: '#FFD08A' } },
    { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#9EC1FF' } },
  ],
};

export default defineConfig({
  // Set SITE_URL in the host's build settings once the domain is known;
  // RSS and the sitemap need absolute URLs.
  site: process.env.SITE_URL || 'http://localhost:4321',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: musingsCode, wrap: false },
  },
});
