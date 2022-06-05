const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "styles/style.scss";`,
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost", "mkugmk-admin.vmff.ru"],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
