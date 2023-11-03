import { Form } from "@remix-run/react";
import { createServerClient, parse, serialize } from "@supabase/ssr";
import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { signup } from "~/utils/auth/signup";

export async function action({ request }: ActionFunctionArgs) {
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const headers = new Headers();
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
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // try {
  //   signup(email, password, supabase);
  // } catch (error) {
  //   console.log(error);
  // }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "/",
    },
  });

  console.log("data", data);

  return redirect("/", {
    headers,
  });
}

export default function SignUp() {
  return (
    <div>
      <Form method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">SignUP</button>
      </Form>
    </div>
  );
}
