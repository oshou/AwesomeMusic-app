export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  build: {
    vendor: ["element-ui"]
  },
  server: {
    port: 8081, // デフォルト: 3000
    host: "0.0.0.0" // デフォルト: localhost
  },
  css: ["uikit/dist/css/uikit.css"],
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
  modules: ["@nuxtjs/axios"],
  // Server
  axios: {}
};
