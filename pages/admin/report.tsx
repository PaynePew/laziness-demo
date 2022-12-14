// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../../components/plasmic/laziness_demo/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/landing_page_starter/PlasmicGlobalVariant__Screen";
import { PlasmicAdminReport } from "../../components/plasmic/laziness_demo/PlasmicAdminReport";
import { useRouter } from "next/router";
import { getIsAdmin } from "../../utils/supabase-server";
import { GetServerSidePropsContext } from "next";

function AdminReport() {
  // Use PlasmicAdminReport to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicAdminReport are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicAdminReport is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter().query}
        query={useRouter().query}
      >
        <PlasmicAdminReport />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default AdminReport;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const isAdmin = await getIsAdmin(ctx);
  if (!isAdmin) {
    return {
      redirect: { permanent: false, destination: "/" },
    };
  }
  return {
    props: {},
  };
};