import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { Footer, Header } from "modules";

const MyApp = ({ Component, pageProps }: AppProps) => {
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

export default MyApp;
