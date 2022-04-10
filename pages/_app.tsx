import React from "react";
import { AppProps } from "next/app";
import { Provider as SessionProvider } from "next-auth/client";
import "@styles/global.css";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
