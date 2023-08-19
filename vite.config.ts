import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Terminal({
    //   console: "terminal",
    // }),
  ],
  server: { port: 8080, },
});
