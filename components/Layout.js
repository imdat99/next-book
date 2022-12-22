import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="text-gray-500 dark:text-gray-400">
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
