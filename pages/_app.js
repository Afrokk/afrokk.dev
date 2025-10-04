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
        <meta name="title" content="Afrokk - Software Engineer" />
        <meta
          name="description"
          content="Software Engineer specializing in full-stack AI development, UI/UX design, and research software engineering. Experienced with React, Next.js, Node.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Afrokk, Afrasiyab Khan, Software Engineer, Full-Stack Developer, React Developer, AI Developer, Next.js, Node.js, UI/UX Designer, Graphics Designer, McGill University, University of Windsor, CHIME/FRB, Portfolio, Web Development, JavaScript, TypeScript, Python, Java"
        />
        <meta name="author" content="Afrasiyab (Afrokk) Khan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://afrokk.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afrokk.dev" />
        <meta
          property="og:title"
          content="Afrokk - Software Engineer & Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Software Engineering graduate from the University of Windsor specializing in full-stack development, UI/UX design, and research software engineering."
        />
        <meta
          property="og:image"
          content="https://afrokk.dev/static/img/about.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Afrokk.dev" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://afrokk.dev" />
        <meta
          name="twitter:title"
          content="Afrokk - Software Engineer & Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Software Engineering graduate from the University of Windsor specializing in full-stack development, UI/UX design, and research software engineering."
        />
        <meta
          name="twitter:image"
          content="https://afrokk.dev/static/img/about.png"
        />
        <meta name="twitter:creator" content="@afrokk_" />

        <meta name="theme-color" content="#7b2cbf" />
        <meta name="msapplication-TileColor" content="#7b2cbf" />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Afrasiyab Khan",
              alternateName: "Afrokk",
              url: "https://afrokk.dev",
              image: "https://afrokk.dev/static/img/about.png",
              description:
                "Software Engineer and Full-Stack AI Developer specializing in modern web technologies, UI/UX design, and research software engineering.",
              jobTitle: "Software Engineer",
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of Windsor",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "McGill University",
                },
              ],
              sameAs: [
                "https://github.com/Afrokk",
                "https://www.linkedin.com/in/afrasiyab-k/",
                "https://orcid.org/0009-0004-4176-0062",
                "https://500px.com/p/Afrokk",
              ],
              email: "hi@afrokk.dev",
            }),
          }}
        />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
