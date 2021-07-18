// TYPES
import type { AppProps } from "next/app";

// STYLES
import "@styles/index.scss";

// COMPONENTS
import Navbar from "@components/Navbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="navbar--offset">
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default App;
