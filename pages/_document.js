import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-black dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
