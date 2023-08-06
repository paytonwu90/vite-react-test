import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vite-react-test/' : '/',
  plugins: [react()],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: 'index.html',
  },
})
