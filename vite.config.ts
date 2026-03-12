import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // Keep both React and Tailwind plugins enabled for this project.
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory.
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Do not add .css, .tsx, or .ts here.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
