import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
//   build: {
//     outDir: '../dist',
//   },
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/tips': {
        target: 'http://localhost:3001',
      },
    },
  },
});
