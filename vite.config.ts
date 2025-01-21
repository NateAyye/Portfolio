import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    TanStackRouterVite({ apiBase: '/Portfolio/' }),
    // viteStaticCopy({
    //   targets: [{ src: '404.html', dest: 'dist' }],
    // }),
  ],
});
