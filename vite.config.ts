import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://minegame01.github.io/IMineTodo",
  build: {
    outDir: "./build",
  }
})
