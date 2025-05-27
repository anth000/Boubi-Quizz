
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DE_TON_DEPOT_GITHUB/', // Remplace par le nom de ton dépôt
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});