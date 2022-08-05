import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import GlobalContextsProvider from "../components/plasmic/laziness_demo/PlasmicGlobalContextsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <GlobalContextsProvider>
        <Component {...pageProps} />
      </GlobalContextsProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp;
