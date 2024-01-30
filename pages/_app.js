import Head from "next/head";
import PreLoader from "@/layouts/PreLoader";
import { useEffect, useState } from "react";
import "@/GlobalStyles/global.sass";
import "@/GlobalStyles/base.sass";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>Afrokk - Software Engineer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Software Engineering grad at the University of Windsor fueled by a passion for creating cutting-edge solutions. Welcome to my portfolio."
        />
        <meta
          name="keywords"
          content="Developer, Portfolio, React, web, development, JavaScript, front-end, back-end, full-stack"
        />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
