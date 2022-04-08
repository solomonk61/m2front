import React from "react";
import { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
import "@styles/global.css";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    // <SessionProvider session={session}>
      <Component {...pageProps} />
    // </SessionProvider>
  );
}

export default MyApp;
