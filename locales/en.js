export default {
  language: "en",
  title: "Museum complex of military and civilian equipment",
  navbar: {
    links: [
      { title: "Home", isDropdown: false, endpoint: "/", icon: false },
      { title: "About", isDropdown: true, icon: true },
      { title: "Events", isDropdown: false, endpoint: "/events", icon: false },
      { title: "News", isDropdown: false, endpoint: "/news", icon: false },
      {
        title: "Gallery",
        isDropdown: false,
        endpoint: "/gallery",
        icon: false,
      },
      {
        title: "Contacts",
        isDropdown: false,
        endpoint: "/contacts",
        icon: false,
      },
    ],
  },
};
