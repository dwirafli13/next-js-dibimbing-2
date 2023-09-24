import "@/styles/globals.css";

import { Josefin_Sans,Kanit, Skranji } from "next/font/google";
import Head from "next/head";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const skranji = Skranji({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Title Home</title>
      </Head>
      <style jsx global>
        {`
          :root {
            --font-kanit: ${kanit.style.fontFamily};
            --font-skranji: ${skranji.style.fontFamily};
            --font-josefin_s: ${josefin_sans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
