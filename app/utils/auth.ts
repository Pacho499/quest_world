import { json } from "@remix-run/node";
import type { SupabaseClient } from "@supabase/supabase-js";

const signInPassword = async (
  supabase: SupabaseClient,
  email: string,
  password: string
) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return json({ message: error });
  }
  return null;
};

const signUp = async (
  supabase: SupabaseClient,
  email: string,
  password: string,
  name: string
) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  });
  console.log("error:", error);
  if (error) {
    return json({ message: error });
  }
  return null;
};
export { signInPassword, signUp };
