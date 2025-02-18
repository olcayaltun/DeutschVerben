import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    hmr: {
      overlay: false, // Hata kaplama ekranını devre dışı bırak
    },
  },
});
