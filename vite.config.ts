import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://www.secyoo.com",
  plugins: [react()],
});

// How to update

// git add .
// git commit -m "update"
// git push -u -f origin main

// npm run build
// git add dist -f
// git commit -m "updated dist"
// git subtree push --prefix dist origin gh-pages
