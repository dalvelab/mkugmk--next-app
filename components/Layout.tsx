import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// TYPES
import { RootState } from "@models/state";

// ACTIONS
import { UIMuseumLinksHandle } from "../redux/actions/uiActions";

// COMPONENTS
import { Navbar } from "@components/Navigation";
import { Sidebar } from "@components/Navigation";
import { Footer } from "@components/UI";
import MenuButton from "@components/MenuButton";
import CartButton from "@components/CartButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const language = useSelector((state: RootState) => state.UI.language);

  useEffect(() => {
    dispatch(UIMuseumLinksHandle(language));
  }, [language]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <MenuButton />
      <CartButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
