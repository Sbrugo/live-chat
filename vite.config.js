import { defineConfig } from 'vite'
import { resolve } from 'path'; 
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //alias de importación
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), 
      '@components': resolve(__dirname, 'src/components'), 
      '@utils': resolve(__dirname, 'src/utils'), 
    },
  },
})
