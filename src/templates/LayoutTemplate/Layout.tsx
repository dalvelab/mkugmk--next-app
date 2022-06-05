import { Navbar, Sidebar } from "../Navigation";
import { Footer } from "@components/UI";
import { LanguageProvider } from "./LanguageContext";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <LanguageProvider>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </LanguageProvider>
  );
};
