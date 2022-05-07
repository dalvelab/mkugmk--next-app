const rusDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const rusMonths = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const rusMonthsDative = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const getRusDay = (day: number) => {
  return rusDays[day];
};

export const getRusMonth = (month: number) => {
  return rusMonths[month - 1];
};

export const getRusMonthDative = (month: number) => {
  if (month < 1 || month > 12) {
    return rusMonthsDative[0];
  }
  return rusMonthsDative[month - 1];
};
