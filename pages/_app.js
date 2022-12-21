import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout className="antialiased bg-white">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
