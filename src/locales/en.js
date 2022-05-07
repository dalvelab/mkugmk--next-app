export default {
  language: "en",
  title: "Museum complex of military and civilian equipment",
  cart: {
    title: "Purchase tickets",
    tableTitle: `Ticket's price`,
    formTitle: "Order Form",
    cartTitle: "Cart",
    buyTicketButton: "Buy ticket",
    checkoutButton: "Proceed to checkout",
    addTicketButton: "Add to cart",
    form: {
      name: "Your Name",
      surname: "Your Surname",
      email: "Your Email",
      emailRepeat: "Email (repeat)",
      ticketType: "Select ticket category",
      visitorsAmount: "Pick visitors amount ",
      namePlaceholder: "Name",
      surnamePlaceholder: "Surname",
      emailPlaceholder: "Your Email",
      ticketTypePlaceholder: "Click to select",
    },
  },
  buttons: {
    buttonBuyTicket: "Buy Ticket",
    buttonLearnMore: "Learn More",
  },
  navbar: {
    links: [
      { title: "Home", isParentLink: false, endpoint: "/", icon: false },
      { title: "About", isParentLink: true, icon: true },
      {
        title: "News and Events",
        isParentLink: false,
        endpoint: "/news",
        icon: false,
      },
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
      phone_support: "voice assistant",
      phone_cooperation: "cooperation",
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
    news: "News and Events",
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
