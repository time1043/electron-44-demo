import type { AliasOptions } from 'vite';

import { fileURLToPath, URL } from 'node:url';

// Shared by vite.main / vite.preload / vite.renderer configs.
export const alias: AliasOptions = {
  '@/renderer': fileURLToPath(new URL('./src/renderer', import.meta.url)),
};
