import { defineConfig } from 'vite';

export default defineConfig({
  base: '/KONTUR/',
  build: {
    target: 'es2022',
    sourcemap: false,
    minify: true
  },
  server: {
    host: '0.0.0.0'
  },
  preview: {
    host: '0.0.0.0'
  }
});
