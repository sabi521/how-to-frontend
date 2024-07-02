// vite.config.mjs
import { defineConfig } from 'vite'
import path from 'path'
import { minify } from 'html-minifier-terser'
import TailwindCSS from 'tailwindcss'
import Autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [
        {
            apply: 'build',
            transformIndexHtml: html => minify(html, {
                collapseWhitespace: true,
                removeComments: true,
            })
        },
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import 'tailwindcss/base'; @import 'tailwindcss/components'; @import 'tailwindcss/utilities';`
            }
        },
        postcss: {
            plugins: [
                TailwindCSS,
                Autoprefixer,
            ],
        },
    },
    build: {
        outDir: path.resolve(__dirname, './assets/dist'),
        assetsDir: '', // set this to an empty string to specify no extra subdirectory
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, './assets/src/js/app.js'),
                style: path.resolve(__dirname, './assets/src/css/app.scss'),
            }
        },
        manifest: true,
    },
})