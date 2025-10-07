import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const viteTsConfigPaths = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
