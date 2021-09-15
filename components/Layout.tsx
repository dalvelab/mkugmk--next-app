import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// TYPES
import { RootState } from "@models/state";

// COMPONENTS
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import MenuButton from "@components/MenuButton";
import CartButton from "@components/CartButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [museums, setMuseums] = useState([]);

  const language = useSelector((state: RootState) => state.UI.language);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.api}/museums?_locale=${language}`
      );
      setMuseums(await response.json());
    };

    fetchData();
  }, [language]);

  return (
    <>
      <Navbar data={{ museums }} />
      <Sidebar data={{ museums }} />
      <MenuButton />
      <CartButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
