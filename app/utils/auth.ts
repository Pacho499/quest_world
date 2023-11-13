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
  if (error) {
    return json({ message: error });
  }
  return null;
};

const sendPasswordResetEmail = async (
  supabase: SupabaseClient,
  email: string
) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/auth/changePassword",
  });
  if (error) {
    return json({ message: error });
  }
  return null;
};

const resetPassword = async (supabase: SupabaseClient, password: string) => {
  const { error } = await supabase.auth.updateUser({ password: password });

  if (error) {
    return json({ message: error });
  }

  return null;
};
export { signInPassword, signUp, sendPasswordResetEmail, resetPassword };
