import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

console.log(process.env.NODE_ENV);

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/Portfolio/',
  plugins: [react(), TanStackRouterVite({ apiBase: '/Portfolio/' })],
});
