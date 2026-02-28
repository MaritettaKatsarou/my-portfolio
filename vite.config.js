import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portfolio/", // Make sure this matches your repo name exactly!
  plugins: [react()],
})
