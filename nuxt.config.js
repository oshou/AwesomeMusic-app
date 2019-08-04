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
  build: {
    vendor: ["element-ui"]
  },
  server: {
    host: "0.0.0.0",
    port: 8081
  },
  css: ["uikit/dist/css/uikit.css"],
  plugins: [{ src: "@/plugins/uikit.js", ssr: false }, "@/plugins/auth0.js"],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/bulma"],
  axios: {},
  auth0: {
    domain: "awesome-music.auth0.com",
    client_id: "ReBHBsldURl6lQhETGg5SWOU95et9Rw8"
  }
};
