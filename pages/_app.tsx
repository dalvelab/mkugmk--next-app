import { Provider } from "react-redux";

// STORE
import store from "../redux/store";

// TYPES
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

// STYLES
import "@styles/index.scss";

// LANG DETECTOR
import { Layout } from "templates/LayoutTemplate";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode[];
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <Provider store={store}>
      <Layout>
        <main className="navbar--offset">
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
};

export default App;
