import "../styles/globals.css";
import { ThirdwebProvider } from "@3rdweb/react";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Polygon Mumbai chain ID is 80001, see https://chainlist.org
  const supportedChainIds = [80001];

  // We'll only support MetaMast which is an injected connector
  const connectors = {
    injected: {},
  };

  return (
    <>
      <Toaster />
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Layout title={pageProps.title}>
        <Component {...pageProps} />
      </Layout>
      </ThirdwebProvider>
    </>
  );
}
