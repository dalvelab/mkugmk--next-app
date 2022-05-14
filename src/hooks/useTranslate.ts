import { useContext } from "react";

import { LanguageContext } from "@templates/LayoutTemplate";

import en from "../locales/en";
import ru from "../locales/ru";

export const useTranslate = () => {
  const { language } = useContext(LanguageContext);

  return language === "ru" ? ru : en;
};
