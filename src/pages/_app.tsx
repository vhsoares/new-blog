import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <NextIntlClientProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </NextIntlClientProvider>
    </main>
  );
}
