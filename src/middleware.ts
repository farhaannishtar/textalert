import { clerkMiddleware } from "@clerk/nextjs/server";
// import { updateSession } from '@/lib/supabase/middleware';

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};