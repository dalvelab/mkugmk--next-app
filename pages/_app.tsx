import { Provider } from "react-redux";

// STORE
import store from "../redux/store";

// TYPES
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

// STYLES
import "@styles/index.scss";

// LANG DETECTOR
import LangDetector from "@components/LangDetector";
import Layout from "@components/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode[];
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <Provider store={store}>
      <LangDetector />
      <Layout>
        <main className="navbar--offset">
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
};

export default App;
