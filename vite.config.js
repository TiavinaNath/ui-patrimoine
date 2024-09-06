import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests to the backend server (en local)
    },
  },
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers construits
  },
});
