import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'public',
  publicDir: 'public',
  build: {
    outDir: '../../server/public',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
  server: {
    proxy: {
      '/tips': {
        target: 'http://localhost:3001',
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/*.html', 
          dest: ''              
        }
      ]
    })
  ]
});
