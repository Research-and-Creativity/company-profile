import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Untuk dev lokal: jalankan `vercel dev`, bukan `npm run dev`
      // `vercel dev` otomatis handle /api/* tanpa perlu proxy ini
      // Proxy ini hanya fallback kalau mau tetap pakai `npm run dev`
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
