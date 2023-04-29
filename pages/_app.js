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
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Afrasiyab - Software Engineer</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="An upcoming Software Engineer at the University of Windsor fueled by a passion for creating cutting-edge solutions. Welcome to my portfolio."
        />
        <meta name="keywords" content="Developer, Portfolio, React, web, development, JavaScript, front-end, back-end, full-stack"/>
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
