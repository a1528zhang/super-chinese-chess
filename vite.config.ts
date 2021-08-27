import { defineConfig } from 'vite'

export default defineConfig({
  // 配置选项
  publicDir: "public",
  server: {
    port: 3000,
    strictPort: true,
  }
});