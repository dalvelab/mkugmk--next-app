export enum LanguageList {
  RU = "ru",
  EN = "en",
}

export type Sizes = "sm" | "md" | "xl";

export type WeekDaysShort =
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat"
  | "sun";

export const weekDaysShortEn: WeekDaysShort[] = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
];

export const weekDaysShortRu = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export enum TicketTypes {
  MV = "МВТ",
  MA = "МАТ",
  PR = "ПР",
  KP = "КП",
  MVMA = "МВТ, МАТ",
  MVKP = "МВТ, КП",
  MVPR = "МВТ, ПР",
  MAKP = "МАТ, КП",
  MAPR = "МАТ, ПР",
  MAKPPR = "МАТ, КП, ПР",
  MAMVKP = "МАТ, МВТ, КП",
  MVKPPR = "МВТ, КП, ПР",
  ALL = "МАТ, МВТ, КП, ПР",
}
