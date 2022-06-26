import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <h1>Header</h1>

      <main>
        <Component {...pageProps} />
      </main>

      <h1>Footer</h1>
    </>
  );
};

export default MyApp;
