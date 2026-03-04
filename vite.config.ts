import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // splits (if possible) React, jQuery, Knockout and Zustand into separate chunks to optimize caching and loading
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'jquery-vendor': ['jquery', 'jquery-ui'],
          'knockout-vendor': ['knockout'],
          'zustand-vendor': ['zustand'],
        },
      },
    },
  },
});
