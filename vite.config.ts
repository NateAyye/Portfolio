import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), TanStackRouterVite({ apiBase: '/Portfolio/' })],
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      plugins: [copy({ targets: [{ src: '404.html', dest: 'dist' }] })],
    },
  },
});
