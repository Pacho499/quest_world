import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "react-router-dom";
import { parse } from "@supabase/ssr";
import Input from "~/components/input";
import { createSupabaseServer } from "~/utils/supabase";
import { sendPasswordResetEmail } from "~/utils/auth";
import { Link } from "react-router-dom";
import NavBar from "~/components/navbar";
import Button from "~/components/button";
import { useEffect, useState } from "react";
import { Form, useActionData } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  const headers = new Headers();
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const supabase = createSupabaseServer(cookies, headers);

  const formData = await request.formData();
  const email = formData.get("email") as string;
  let error = null;

  error = await sendPasswordResetEmail(supabase, email);

  if (error) {
    return error;
  }

  console.log();

  return json(
    { message: { message: "email sent" } },
    { status: 200, headers: headers }
  );
}

export default function ResetPassword() {
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    if (actionData) {
      if (actionData.message.message === "email sent") {
        setModal(true);
      } else {
        setError(actionData.message.message);
      }
    }
  }, [actionData]);

  const handleModal = () => {
    setModal(false);
  };
  return (
    <div className="relative">
      <NavBar />
      {modal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 h-44 flex justify-around flex-col text-center">
          <h2 className="text-Mh2">Email link sent</h2>
          <p className="text-Mp">Verify your email to reset your password</p>
          <button onClick={handleModal}>ok</button>
        </div>
      )}
      <div className="grid grid-cols-4 md:grid-cols-12 gap-3 authBG py-8">
        <div
          className={
            "grid col-span-full md:col-start-5 md:col-end-9 mx-5 md:mx-0 p-5 bg-background text-center"
          }
        >
          <h2 className="text-Mh2 font-bold mb-1">Trouble logging in?</h2>
          <Form method="POST" className="text-left">
            <Input
              name="email"
              placeholder="email"
              type="email"
              text="Email"
              id="email"
            />
            {error && (
              <span className="text-error font-bold text-center ml-2 text-xs">
                {error}
              </span>
            )}
            <Button text="Send email" type="submit" />
          </Form>
          <Link
            to="/auth"
            className="bg-white hover:bg-primary hover:text-white text-primary p-2 mx-2 text-center transition-colors border-2 border-primary"
            type="submit"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
