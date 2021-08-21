export default {
  language: "ru",
  title: "Музейный комплекс военной и гражданской техники",
  buyTicket: "Купить билет",
  navbar: {
    links: [
      { title: "Главная", isParentLink: false, endpoint: "/", icon: false },
      { title: "О комплексе", isParentLink: true, icon: true },
      {
        title: "Мероприятия",
        isParentLink: false,
        endpoint: "/events",
        icon: false,
      },
      {
        title: "Новости",
        isParentLink: false,
        endpoint: "/news",
        icon: false,
      },
      {
        title: "Галерея",
        isParentLink: false,
        endpoint: "/gallery",
        icon: false,
      },
      {
        title: "Контакты",
        isParentLink: false,
        endpoint: "/contacts",
        icon: false,
      },
    ],
    aboutLinks: {
      chooseCategory: "Выберите категорию",
      museum: "Музейный комплекс",
      visitors: "Посетителям",
      collections: "Коллекции",
    },
  },
  footer: {
    address: {
      city: "Верхняя Пышма",
      street: "ул. Александра Козицына, 2",
    },
    socials: {
      mat: "Музей автомобильной техники",
      mvt: "Музей военной техники",
    },
    contacts: {
      phone: "телефон музея",
      emailSupport: "подддержка",
      emailTickets: "билеты",
    },
  },
  headingSection: {
    about: "О музейном комплексе",
    openFrom: "Сегодня открыто с",
    openTo: "до",
    todayIsWeekend: "Сегодня у музея выходной",
  },
  titles: {
    events: "События",
    news: "Новости",
    gallery: "Галерея",
  },
  welcomePage: {
    events: "События",
    news: "Новости",
    gallery: "Галерея",
  },
  contactsPage: {
    title: "Контакты",
  },
};
