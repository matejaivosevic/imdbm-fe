/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import HeadContent from "./HeadContent";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          type="text/css"
          href="../../../static/styles.css"
        />
        <title>IMDBM</title>
      </Head>

      <div style={{ paddingTop: "1em" }}>{children}</div>
    </>
  );
}

export default Layout;
