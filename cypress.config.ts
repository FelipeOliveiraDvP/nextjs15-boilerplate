import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultBrowser: "chrome",
    viewportWidth: 1360,
    viewportHeight: 720,
  },
});
