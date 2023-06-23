import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-iner",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <main
          className={`${monserrat.className} font-mont bg-light w-full min-h-screen`}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </header>
    </>
  );
}
