import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import GlobalContextsProvider from "../components/plasmic/laziness_demo/PlasmicGlobalContextsProvider";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

import * as gtag from "../lib/gtag";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { CustomUserContextProvider } from "../utils/useUser";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
          <UserProvider supabaseClient={supabaseClient}>
            <CustomUserContextProvider supabaseClient={supabaseClient}>
              <Component {...pageProps} />
            </CustomUserContextProvider>
          </UserProvider>
        </GlobalContextsProvider>
      </PlasmicRootProvider>
    </>
  );
}

export default MyApp;
