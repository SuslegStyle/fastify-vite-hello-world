import {join, resolve, relative} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const dev = process.env.NODE_ENV !== 'production';

export default defineConfig({
    build: {
        assetsDir: 'assets',
        minify: !dev,
        outDir: 'dist',
        reportCompressedSize: false
    },
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: [
            {
                find: '@styles',
                replacement: join(resolve(__dirname), 'styles')
            }
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData(content, contentPath) {
                    const relativePath = relative(__dirname, contentPath);

                    if (relativePath.startsWith('pages/external/')) {
                        return `@import "@styles/external"; ${content}`;
                    }

                    return `@import "@styles"; ${content}`;
                }
            }
        }
    }
});