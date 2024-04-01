import { defineNuxtConfig } from 'nuxt/config';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
console.log('nuxt.config.ts > baseUrl:', baseUrl);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            baseUrl,
        },
    },
});
