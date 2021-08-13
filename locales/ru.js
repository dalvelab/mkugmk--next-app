export default {
  language: "ru",
  title: "Музейный комплекс военной и гражданской техники",
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
  },
};
