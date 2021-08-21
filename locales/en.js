export default {
  language: "en",
  title: "Museum complex of military and civilian equipment",
  buyTicket: "Buy ticket",
  navbar: {
    links: [
      { title: "Home", isParentLink: false, endpoint: "/", icon: false },
      { title: "About", isParentLink: true, icon: true },
      {
        title: "Events",
        isParentLink: false,
        endpoint: "/events",
        icon: false,
      },
      { title: "News", isParentLink: false, endpoint: "/news", icon: false },
      {
        title: "Gallery",
        isParentLink: false,
        endpoint: "/gallery",
        icon: false,
      },
      {
        title: "Contacts",
        isParentLink: false,
        endpoint: "/contacts",
        icon: false,
      },
    ],
    aboutLinks: {
      chooseCategory: "Browse categories",
      museum: "Museum complex",
      visitors: "Visitors",
      collections: "Collections",
    },
  },
  footer: {
    address: {
      city: "Verkhnyaya Pyshma",
      street: "Alexandra Kozitcina 2, st",
    },
    socials: {
      mat: "Auto museum",
      mvt: "Military museum",
    },
    contacts: {
      phone: `museum's phone`,
      emailSupport: "support",
      emailTickets: "tickets",
    },
  },
  headingSection: {
    about: "About complex",
    openFrom: "Today is opened from",
    openTo: "to",
    todayIsWeekend: "Today museum is closed",
  },
  titles: {
    events: "Events",
    news: "News",
    gallery: "Gallery",
  },
  welcomePage: {
    events: "Events",
    news: "News",
    gallery: "Gallery",
  },
  contactsPage: {
    title: "Contacts",
  },
};
