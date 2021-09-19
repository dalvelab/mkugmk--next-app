import { useSelector } from "react-redux";

// TYPES
import { RootState } from "@models/state";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

export const useTranslate = () => {
  const language = useSelector((state: RootState) => state.UI.language);

  return language === "ru" ? ru : en;
};
