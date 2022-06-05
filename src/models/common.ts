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
