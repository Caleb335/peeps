import React from "react";
import Head from "next/head";
import "../styles/Global.css";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Tipestry | Home</title>
        <link rel="icon" href="/static/img/tipcoin.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
