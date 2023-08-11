import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Terminal from 'vite-plugin-terminal';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Terminal({
    //   console: "terminal",
    // }),
  ],
  server: {
    port: 8080,
  },
});
