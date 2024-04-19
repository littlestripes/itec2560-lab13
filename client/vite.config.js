import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            // requests will be redirected to the other server
            '/wyr': 'http://localhost:3000/'
        }
    }
})
