// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/laziness_demo/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/landing_page_starter/PlasmicGlobalVariant__Screen";
import { PlasmicLogIn } from "../components/plasmic/laziness_demo/PlasmicLogIn";
import { useRouter } from "next/router";
import { useUser } from "../utils/useUser";
import LoadingPage from "../components/LoadingPage";

function LogIn() {
  const router = useRouter();
  const { userDetails, isLoading } = useUser();
  React.useEffect(() => {
    if (userDetails && !isLoading) {
      if (userDetails.isadmin) {
        router.replace("/admin");
        return;
      }
      router.replace("/member");
      return;
    }
  }, [userDetails, isLoading]);

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter().query}
        query={useRouter().query}
      >
        {/* todo:!!!if client side loading render not working and dont want to use swr, try server side */}
        {userDetails ? <LoadingPage /> : <PlasmicLogIn />}
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default LogIn;
