import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="antialiased bg-white">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
