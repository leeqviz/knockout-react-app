// vitest.config.ts
import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config'; // Импортируем ваш основной конфиг Vite

// Сливаем основной конфиг с тестовым
export default mergeConfig(
  viteConfig,
  defineConfig({
    // Здесь мы задаем алиасы ИМЕННО для Vitest
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup-tests.ts',
      // Сюда же можно вынести все остальные настройки тестов,
      // чтобы очистить от них vite.config.ts
    },
  }),
);
