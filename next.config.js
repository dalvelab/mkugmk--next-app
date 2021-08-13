const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
};
