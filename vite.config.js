import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path para GitHub Pages: '/barbologo/'
// Quando tiveres domínio próprio, muda para '/' e adiciona um ficheiro
// public/CNAME com o teu domínio (ex: obarbologo.pt)
export default defineConfig({
  plugins: [react()],
  base: '/barbologo/',
})
