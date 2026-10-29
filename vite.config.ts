import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 相对路径输出，构建结果可放在任意子路径下直接打开，不需要为 GitHub Pages 改配置。
  base: './',
})
