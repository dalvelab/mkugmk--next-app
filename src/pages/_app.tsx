import { AppProps } from "next/app";
import { NextPage } from "next";

import "@styles/index.scss";

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
    <Layout>
      <main className="navbar--offset">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
