import { Provider } from "react-redux";

// TYPES
import type { AppProps } from "next/app";

import store from "../redux/store";

// STYLES
import "@styles/index.scss";

// COMPONENTS
import Navbar from "@components/Navbar";
import MenuButton from "@components/MenuButton";
import Footer from "@components/Footer";

// LANG DETECTOR
import LangDetector from "../locales/LangDetector";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LangDetector />
      <Navbar />
      <MenuButton />
      <main className="navbar--offset">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
export default App;
