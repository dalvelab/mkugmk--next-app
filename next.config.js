const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com", "localhost"],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
  env: {
    api: "http://mkugmk-admin.vmff.ru",
  },
};
