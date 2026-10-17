import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { alias } from './vite.alias.mts';

// https://vitejs.dev/config
export default defineConfig({
  // Packaged app loads the bundle from file://, so asset URLs must be relative.
  base: './',
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/renderer/routes',
      generatedRouteTree: './src/renderer/routeTree.gen.ts',
    }),
    react(),
    tailwindcss(),
  ],
  resolve: { alias },
});
