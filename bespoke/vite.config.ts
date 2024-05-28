import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  define: { 'process.env': process.env },
  build: {
    lib: {
      entry: path.resolve("src", 'index.tsx'),
      name: 'bespoke.js',
      fileName: () => 'bespoke.js'
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html")
      },
    }
  }
});
