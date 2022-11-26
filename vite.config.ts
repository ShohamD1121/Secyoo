import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Secyoo/",
  plugins: [react()],
});

// How to update
// npm run build
// git add dist -f
// git commit -m "updated dist"
// git subtree push --prefix dist origin gh-pages
