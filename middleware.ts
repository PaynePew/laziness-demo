// pages/protected/_middleware.ts
import { withMiddlewareAuth } from "@supabase/auth-helpers-nextjs";

export const middleware = withMiddlewareAuth({
  redirectTo: "/login",
});

export const config = {
  matcher: ["/member", "/admin/:path*"],
};
