import NavBar from "~/components/navbar";
import Button from "~/components/button";
import type { MetaFunction } from "@remix-run/node";
import { type LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({}: LoaderFunctionArgs) {
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL!,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    },
  };
}

export default function Index() {
  const { env } = useLoaderData<typeof loader>();

  const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
    };

    fetchUser();
  }, [supabase]);
  return (
    <div>
      <NavBar />
      <div className="text-text grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-full grid md:grid-cols-12 gap-3 text-center relative castleBG">
          <div className="text-Mh1 gap-4 mx-5 col-span-full">
            <h1>D&D</h1>
            <h1 className="font-bold">Quest World</h1>
          </div>
          <p className="text-Mp mx-5 md:col-start-3 md:col-end-11">
            Embark on a Quest for Imagination and Adventure! Explore the realms
            of Dungeons & Dragons like never before on our platform. Create,
            share, and play epic adventures in a vibrant community of fellow
            storytellers and heroes. Join us now and let your journey into
            fantasy begin!
          </p>
        </div>
        <div className="p-5 col-span-full text-Mp md:text-Dp text-center md:text-left md:grid md:grid-cols-12 md:gap-5 bg-background">
          <div className="col-start-3 col-end-5">
            <p className="font-bold">Craft Your Adventures</p>
            <p>
              Create your own custom D&D quests, populate them with NPCs and
              monsters, and shape the destiny of heroes.
            </p>
          </div>
          <div className="col-start-6 col-end-8">
            <p className="font-bold">Explore boundless realms</p>
            <p>
              Dive into a vast collection of player-crafted adventures, each
              offering unique challenges and immersive storytelling.
            </p>
          </div>
          <div className="col-start-9 col-end-11">
            <p className="font-bold">Forge a heroic community</p>
            <p>
              Connect with fellow adventurers, join or form groups, and share
              your epic tales in our vibrant community forums.
            </p>
          </div>
        </div>
        <div className="col-span-full grid-cols-4 md:grid-cols-12 grid gap-x-5 diceBG pb-4">
          <div className="mx-5 md:mx-0 md:col-start-3 md:col-end-10 col-span-full">
            <h2 className="text-Mh2 md:text-Dh2 font-bold mb-3">Join US</h2>
            <p className="text-Mp md:text-Dp">
              By joining our platform, you gain access to a treasure trove of
              user-created content, forge new friendships, and become a part of
              a dynamic community dedicated to storytelling and exploration.
              Join us today and let your adventures begin!
            </p>
          </div>
          <div className="md:col-start-3 mx-5 md:mx-0 col-span-2 bg-primary p-1 text-center">
            <Button text="Join Us" />
          </div>
        </div>
      </div>
    </div>
  );
}
