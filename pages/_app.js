import { useRouter } from "next/router";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  // on client side only:
  if (typeof window !== "undefined") {
    document.body.dir = locale === "en" ? "ltr" : "rtl";
    document.querySelector("html").dir = locale === "en" ? "ltr" : "rtl";
  }

  // only on the first load of the page
  useEffect(() => {
    // check if local storage has "theme=light"
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
