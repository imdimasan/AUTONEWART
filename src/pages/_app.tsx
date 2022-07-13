import { Footer, Header } from "modules";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

const AutoNewArt = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default AutoNewArt;
