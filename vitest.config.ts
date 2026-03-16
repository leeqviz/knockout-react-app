import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom', // for react testing library
      setupFiles: [
        './src/tests/setup/vitest.ts',
        './src/tests/setup/knockout.ts',
      ], // useful for mocks initialization
    },
  }),
);
