import { Inter } from "next/font/google";
import "../styles/global.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className)}>
      <Component {...pageProps} />
    </div>
  );
}
