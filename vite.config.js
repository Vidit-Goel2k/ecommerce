import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Remove 'context/data/MyState' from the external array
    rollupOptions: {
      external: [], // If 'context/data/MyState' is not an external module
    },
  },
})
