import { defineConfig } from 'vite';
import { alias } from './vite.alias.mts';

// https://vitejs.dev/config
export default defineConfig({
  resolve: { alias },
});
