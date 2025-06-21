import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public/react',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,
        format: 'iife' 
      },
    },
  },
})