import React from "react";

// TYPES
import { NextPage } from "next";

// COMPONENTS
import Head from "next/head";

const WelcomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="navbar--offset">
        <section className="welcome__page--header"></section>
      </main>
    </>
  );
};

export default WelcomePage;
