import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/task-hub/', 
  plugins: [
    vue(),
    tailwindcss(), // 激活 Tailwind v4 引擎
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 vue 相关库打包在一起
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 其他第三方库（如以后引入的 axios 或 echarts）
          // 'utils-vendor': ['axios'],
        }
      }
    }
  }
})
