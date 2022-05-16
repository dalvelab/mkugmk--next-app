import { useContext } from "react";

import { useLanguage } from "@templates/LayoutTemplate";

import en from "../locales/en";
import ru from "../locales/ru";

export const useTranslate = () => {
  const { language } = useLanguage();

  return language === "ru" ? ru : en;
};
