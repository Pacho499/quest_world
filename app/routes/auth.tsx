import { Form, useActionData } from "@remix-run/react";
import { parse } from "@supabase/ssr";
import { useEffect, useState } from "react";
import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { createSupabaseServer } from "~/utils/supabase";
import { signInPassword, signUp } from "~/utils/auth";
import Input from "~/components/input";
import NavBar from "~/components/navbar";

export async function action({ request }: ActionFunctionArgs) {
  const headers = new Headers();
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const supabase = createSupabaseServer(cookies, headers);

  const formData = await request.formData();
  const action = formData.get("_action") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  let error = null;

  if (action === "login") {
    error = await signInPassword(supabase, email, password);
  } else {
    error = await signUp(supabase, email, password, name);
  }
  console.log("error on action", error);
  if (error) {
    return error;
  }

  return redirect("/", {
    headers,
  });
}

export default function SignUp() {
  const [signUp, setSignUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const actionData = useActionData<typeof action>();

  const handleAuth = () => {
    setSignUp(!signUp);
    if (error !== "") {
      setError("");
    }
  };
  useEffect(() => {
    setError(actionData?.message?.message);
  }, [actionData]);
  console.log(error);
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 md:grid-cols-12 gap-3 authBG py-8">
        <div className="grid col-span-full md:col-start-5 md:col-end-9 mx-5 md:mx-0 p-5 bg-background text-center">
          <h2 className="text-Mh2 font-bold mb-1">
            Join us today to live your new adventure
          </h2>
          <Form method="POST" className="text-left">
            <Input
              name="email"
              placeholder="email"
              type="email"
              text="Email"
              id="email"
            />
            {signUp && (
              <Input
                name="name"
                placeholder="name"
                type="name"
                text="Name"
                id="name"
              />
            )}
            <Input
              name="password"
              placeholder="password"
              type="password"
              text="Password"
              id="password"
            />
            {error && (
              <span className="text-error font-bold text-center ml-2 text-xs">
                {error}
              </span>
            )}
            <div className="bg-primary hover:bg-special text-white p-2 m-2 text-center mt-8 transition-colors">
              <button
                type="submit"
                name="_action"
                value={signUp ? "signUp" : "login"}
              >
                {signUp ? "Sign Up" : "Log In"}
              </button>
            </div>
          </Form>
          <div className="flex flex-col underline underline-offset-2 gap-2">
            {signUp ? null : <span>Forgot your password?</span>}
            <button onClick={handleAuth} type="button">
              <span>
                {signUp
                  ? "Already have an account? sign in"
                  : "Don't have an account? signup!"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
