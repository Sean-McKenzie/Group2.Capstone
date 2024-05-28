import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": `postgres://tune_talk_user:WpfPaFxhqDgwK9j012wcQqgnBZq6MIzZ@dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk:${process.env.PORT || 3000}`,
    },
  },
});
