import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

const dev = process.env.NODE_ENV !== 'production';

export default defineConfig({
    build: {
        assetsDir: 'assets',
        minify: !dev,
        outDir: 'dist',
        reportCompressedSize: false
    },
    plugins: [vue()]
});