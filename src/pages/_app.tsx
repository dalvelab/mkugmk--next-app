import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { NextPage } from "next";

import "@styles/index.scss";

import store from "../redux/store";
import { Layout } from "../templates/LayoutTemplate";

// MOCKS
if (process.env.NODE_ENV === "development") {
  import("../mocks").then(({ setup }) => setup());
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode[];
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
