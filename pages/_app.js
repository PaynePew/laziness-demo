import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import GlobalContextsProvider from "../components/plasmic/laziness_demo/PlasmicGlobalContextsProvider";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { supabase } from "../utils/supabaseClient";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       await fetch("/api/set-auth-cookie", {
  //         method: "POST",
  //         headers: new Headers({ "content-Type": "application/json" }),
  //         body: JSON.stringify({ session, event }),
  //       });
  //     }
  //   );
  //   return () => {
  //     authListener?.unsubscribe();
  //   };
  // });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      ></Script>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <PlasmicRootProvider>
        <GlobalContextsProvider>
          <Component {...pageProps} />
        </GlobalContextsProvider>
      </PlasmicRootProvider>
    </>
  );
}

export default MyApp;
