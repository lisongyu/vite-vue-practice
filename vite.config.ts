import {resolve} from 'path';
import { defineConfig,normalizePath} from "vite"
import vue from "@vitejs/plugin-vue"

const variablePath = normalizePath(resolve('./src/assets/sass/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
   //设置别名
   resolve: {
    alias: {
      '@': resolve('src'),
      '@assets':resolve('src/assets')
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个scss的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },

  },

  plugins: [vue()]
})
