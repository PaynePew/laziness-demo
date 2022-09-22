// pages/protected/_middleware.ts
import { withMiddlewareAuth } from "@supabase/auth-helpers-nextjs";
// import { supabaseServerClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest } from "next/server";
// import { NextApiRequest } from "next";

export const middleware = withMiddlewareAuth({
  redirectTo: "/login",
});

// export const middleware = (req:NextApiRequest) => {
//   let { data, error } = supabaseServerClient({ req}).rpc("get_is_admin");
//   console.log("middleware return", data);
//   if (error) {
//     throw error;
//   }
// };

export const config = {
  matcher: ["/member", "/admin/:path*"],
};
