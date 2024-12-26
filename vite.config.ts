import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',           // 主页面
        support: './support.html',      // 第二个页面
      },
    },
  },
})
