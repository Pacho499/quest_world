import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "react-router-dom";
import { parse } from "@supabase/ssr";
import Input from "~/components/input";
import { createSupabaseServer } from "~/utils/supabase";
import { Link } from "react-router-dom";
import NavBar from "~/components/navbar";
import Button from "~/components/button";
import { useEffect, useState } from "react";
import { Form, useActionData } from "@remix-run/react";
import { resetPassword } from "~/utils/auth";

export async function action({ request }: ActionFunctionArgs) {
  const headers = new Headers();
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const supabase = createSupabaseServer(cookies, headers);

  const formData = await request.formData();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  let error = null;

  if (password !== confirmPassword) {
    return json(
      { message: { message: "Password must be equal" } },
      { status: 400, headers: headers }
    );
  }

  error = await resetPassword(supabase, password);

  if (error) {
    return error;
  }

  return json(
    { message: { message: "Password changed" } },
    { status: 200, headers: headers }
  );
}

export default function ChangePassword() {
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const actionData = useActionData<typeof action>();

  console.log(actionData);

  useEffect(() => {
    if (actionData) {
      console.log(actionData);
      if (actionData.message.message === "Password changed") {
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
          <p className="text-Mp">Your Password has been changed</p>
          <Link to="/auth" onClick={handleModal}>
            ok
          </Link>
        </div>
      )}
      <div className="grid grid-cols-4 md:grid-cols-12 gap-3 authBG py-8">
        <div
          className={
            "grid col-span-full md:col-start-5 md:col-end-9 mx-5 md:mx-0 p-5 bg-background text-center"
          }
        >
          <h2 className="text-Mh2 font-bold mb-1">Reset yout Password</h2>
          <Form method="POST" className="text-left">
            <Input
              name="password"
              placeholder="password"
              type="password"
              text="Password"
              id="password"
            />
            <Input
              name="confirmPassword"
              placeholder="confirmPassword"
              type="password"
              text="Confirm Password"
              id="confirmPassword"
            />
            {error && (
              <span className="text-error font-bold text-center ml-2 text-xs">
                {error}
              </span>
            )}
            <Button text="Reset Password" type="submit" />
          </Form>
        </div>
      </div>
    </div>
  );
}
