import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

// redux
import { store } from "../app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, session }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  });

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Nitesh Bhagat</title>
            <link
              rel="shortcut icon"
              sizes="30"
              href="Nb.png"
              type="image/x-icon"
            />
          </Head>

          <LoadingBar
            color="#0d9488"
            waitingTime={400}
            loaderSpeed={600}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
export default MyApp;
