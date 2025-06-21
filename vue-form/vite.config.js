import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../public/vue',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,
        format: 'iife'
      },
    },
  },
})