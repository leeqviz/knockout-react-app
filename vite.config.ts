import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

/**
 * Вам нужно настроить HTTP-заголовки на Nginx или Apache для кэширования так:

Для папки assets (где лежат .js и .css файлы с хэшами):
Cache-Control: public, max-age=31536000, immutable
(Смело кэшировать на год! Файлы никогда не изменятся, потому что при любом изменении у них будет уже другое имя).

Для входного файла (вашего HTML, который генерирует бэкенд, или index.html):
Cache-Control: no-cache
(Браузер всегда должен спрашивать сервер: "А не поменялся ли HTML?". Именно в HTML лежат актуальные ссылки на новые скрипты с хэшами).
 */

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Настраиваем Rollup (движок сборки под капотом Vite)
    rollupOptions: {
      output: {
        // Функция ручной нарезки чанков
        manualChunks(id) {
          // Параметр 'id' — это полный путь к каждому файлу, который проходит через сборщик.
          // Если файл лежит в папке node_modules, значит это сторонняя библиотека.
          if (id.includes("node_modules")) {
            // 1. Выделяем ядро React и стейт-менеджер в чанк 'react-vendor'
            if (id.includes("react")) {
              return "react-vendor";
            }

            // 2. Выделяем тяжелое легаси в чанк 'legacy-vendor'
            if (id.includes("knockout")) {
              return "knockout-vendor";
            }

            if (id.includes("jquery")) {
              return "jquery-vendor";
            }

            // 3. Все остальные мелкие библиотеки из npm отправляем в общий чанк 'vendor'
            // (например, lodash, date-fns, axios и т.д.)
            return "vendor";
          }

          // Если функция ничего не возвращает, Vite оставит файл в основном чанке (вашем index.js)
        },
      },
    },
    // Опционально: можно чуть поднять лимит предупреждения,
    // так как react-dom сам по себе весит около 130kb (minified)
    chunkSizeWarningLimit: 600,
  },
});
