export default {
  mode: "spa",
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
  css: [{ src: "@/node_modules/uikit/dist/css/uikit.css" }],
  plugins: [{ src: "@/plugins/uikit.js", ssr: false }, "@/plugins/auth0.js"],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  env: {
    API_URL: process.env.API_URL
  },
  build: {
    extend(config, ctx) {
      config.node = {
        fs: "empty" // Backend APIを使うのに必要
      };
    }
  },
  axios: {},
  auth0: {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  }
};
