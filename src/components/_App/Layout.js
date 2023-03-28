/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import HeadContent from "./HeadContent";
import NavMenu from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <title>IMDBM</title>
      </Head>
      <NavMenu />
      <div style={{ paddingTop: "1em" }}>{children}</div>
    </>
  );
}

export default Layout;
