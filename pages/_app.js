import Head from "next/head";
import { useEffect, useState } from "react";
import PreLoader from "@/sidebar/PreLoader";
import "@/GlobalStyles/global.sass"
import "@/GlobalStyles/base.sass"


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
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
