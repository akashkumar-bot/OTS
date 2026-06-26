import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Django serves frontend/public directly; Vite should not copy it.
  publicDir: false,
  build: {
    // Keep generated files readable for learning and debugging.
    minify: false,
    cssMinify: false,
    outDir: 'frontend/public/OTS',
    // master.css is maintained directly in the output folder.
    emptyOutDir: false,
    rollupOptions: {
      input: 'frontend/main.jsx',
      output: {
        entryFileNames: 'app.js',
        chunkFileNames: 'chunks/[name].js',
        // Keep third-party library code out of the application file. This
        // leaves app.js focused on Quizly's own components and behaviour.
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/scheduler')
          )
            return 'react'
        },
      },
    },
  },
})
