import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss() ],
=======
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
>>>>>>> d0e74f58abb1a44f2fb792f149015e4ef2791067
})
