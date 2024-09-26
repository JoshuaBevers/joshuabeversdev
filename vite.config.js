import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // exclude:[['**/*.{test,spec}.?(c|m)[jt]s?(x)']]
  }
})
