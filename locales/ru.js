export default {
  language: "ru",
  title: "Музейный комплекс военной и гражданской техники",
  cart: {
    title: "Купить билет",
    tableTitle: "Стоимость билетов",
    formTitle: "Оформление заказа",
    cartTitle: "Корзина",
    buyTicketButton: "Купить билет",
    checkoutButton: "Перейти к опллате",
    addTicketButton: "Добавить",
    form: {
      name: "Ваше Имя",
      surname: "Ваша Фамилия",
      email: "Ваш Email",
      emailRepeat: "Email повторно",
      ticketType: "Выберите тип билета",
      visitorsAmount: "Выберите кол-во посетителей",
      namePlaceholder: "Имя",
      surnamePlaceholder: "Фамилия",
      emailPlaceholder: "Ваш Email",
      ticketTypePlaceholder: "Нажмите чтобы выбрать",
    },
  },
  buttons: {
    buttonBuyTicket: "Купить билет",
    buttonLearnMore: "Подробнее",
  },
  navbar: {
    links: [
      { title: "Главная", isParentLink: false, endpoint: "/", icon: false },
      { title: "О комплексе", isParentLink: true, icon: true },
      {
        title: "Новости и Мероприятия",
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
    news: "Новости и События",
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
