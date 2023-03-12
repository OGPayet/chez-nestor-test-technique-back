// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  runtimeConfig: {
    public: {
      jwtSecretkey: process.env.JWT_SECRETKEY, // TODO: find a way to make this variable work in private
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/*": { cors: true },
  },
  vite: {
    server: {
      hmr: {
        port: 3001,
        clientPort: 3001,
      },
      proxy: {
        "/back-end-api": {
          target: "http://back-end:4000",
          ws: true,
          changeOrigin: true,
          autoRewrite: true,
          rewrite: (path) => path.replace(/^\/back-end-api/, ""),
        },
      },
    },
  },
});
