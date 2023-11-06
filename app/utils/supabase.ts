import { createServerClient, serialize } from "@supabase/ssr";

const createSupabaseServer = (
  cookies: { [key: string]: string },
  headers: Headers
) => {
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options));
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options));
        },
      },
    }
  );
  return supabase;
};

export { createSupabaseServer };
