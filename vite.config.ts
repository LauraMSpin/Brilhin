import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages publica em https://lauramspin.github.io/Brilhin/
// O caminho diferencia maiúsculas de minúsculas e precisa ser igual ao nome do repositório.
// Para domínio próprio, defina BASE_PATH=/ no build.
const base = process.env.BASE_PATH ?? '/Brilhin/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    // As imagens ficam em public/assets; JS/CSS gerados vão para "static"
    // para não se misturarem com elas.
    assetsDir: 'static',
  },
})
