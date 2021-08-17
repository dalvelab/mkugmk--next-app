export default {
  language: "ru",
  title: "Музейный комплекс военной и гражданской техники",
  buyTicket: "Купить билет",
  navbar: {
    links: [
      { title: "Главная", isDropdown: false, endpoint: "/", icon: false },
      { title: "О комплексе", isDropdown: true, icon: true },
      {
        title: "Мероприятия",
        isDropdown: false,
        endpoint: "/events",
        icon: false,
      },
      {
        title: "Новости",
        isDropdown: false,
        endpoint: "/news",
        icon: false,
      },
      {
        title: "Галерея",
        isDropdown: false,
        endpoint: "/gallery",
        icon: false,
      },
      {
        title: "Контакты",
        isDropdown: false,
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
  welcomePage: {
    events: "События",
    news: "Новости",
    gallery: "Галерея",
  },
  contactsPage: {
    title: "Контакты",
  },
};
