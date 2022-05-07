import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Navbar, Sidebar } from "@components/Navigation";
import { Footer } from "@components/UI";
import { UIMuseumLinksHandle } from "@redux/actions/uiActions";
import { languageSelector, sidebarSelector } from "@selectors/common";
import { LanguageList } from "@models/common";
import { handleUILanguage, UISidebarHandle } from "@redux/actions/uiActions";

import LangDetector from "./LangDetector";
import { ButtonSidebar } from "./ButtonSidebar/ButtonSidebar";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  const dispatch = useDispatch();
  const router = useRouter();

  const language = useSelector(languageSelector);
  const { isOpen } = useSelector(sidebarSelector);

  useEffect(() => {
    dispatch(UIMuseumLinksHandle(language));
  }, [language]);

  const onLanguageChange = (locale: LanguageList) => {
    router.push("/", "/", { locale: locale });
    dispatch(handleUILanguage(locale));
  };

  const handleSidebar = () => {
    dispatch(UISidebarHandle(isOpen ? false : true));
  };

  return (
    <>
      <LangDetector />
      <Navbar onLanguageChange={onLanguageChange} />
      <Sidebar />
      <ButtonSidebar isOpen={isOpen} onClick={handleSidebar} />
      {children}
      <Footer />
    </>
  );
};
