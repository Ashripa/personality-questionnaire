// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// 静态输出，部署到 Netlify（CI 构建后发布 dist/）。
// build.format:'file' → 输出 fill.html / view.html / docs.html，
// 保持现有 ?s=xxx 内部链接与旧站一致，无需改动。
export default defineConfig({
  site: 'https://univercell-personality-questionnaire.netlify.app',
  integrations: [react()],
  build: { format: 'file' },
});
