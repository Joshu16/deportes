import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base es necesario para GitHub Pages (reemplaza con el nombre de tu repo)
export default defineConfig({
  base: '/deportes/',
  plugins: [react()],
})
