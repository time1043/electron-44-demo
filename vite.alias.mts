import { fileURLToPath, URL } from 'node:url';
import type { AliasOptions } from 'vite';

// Shared by vite.main / vite.preload / vite.renderer configs.
export const alias: AliasOptions = {
  '@/renderer': fileURLToPath(new URL('./src/renderer', import.meta.url)),
};
