import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { LanguageList } from "@models/common";

interface IContextProps {
  language: LanguageList;
  handleLanguageChange: (language: LanguageList) => void;
}

const LanguageContext = React.createContext<IContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC = (props) => {
  const { children } = props;

  const router = useRouter();

  const [language, setLanguage] = useState(LanguageList.RU);

  useEffect(() => {
    if (router.locale === "ru") {
      setLanguage(LanguageList.RU);
    } else {
      setLanguage(LanguageList.EN);
    }
  }, [router.locale]);

  const handleLanguageChange = (language: LanguageList) => {
    setLanguage(language);
    router.push(router.pathname, router.pathname, { locale: language });
  };

  const value = { language, handleLanguageChange };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used with LanguageProvider");
  }

  return context;
};
