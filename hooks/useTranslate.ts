import { useSelector } from "react-redux";

import { languageSelector } from "@selectors/common";

import en from "../locales/en";
import ru from "../locales/ru";

export const useTranslate = () => {
  const language = useSelector(languageSelector);

  return language === "ru" ? ru : en;
};
