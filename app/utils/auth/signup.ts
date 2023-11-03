export async function signup(email, password, supabase) {
  const { data, errror } = await supabase.auth.signup({
    email,
    password,
    options: {},
  });
}
