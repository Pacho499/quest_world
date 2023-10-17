import type { MetaFunction } from "@remix-run/node";
import castle from "../images/castle.jpg";
import dice from "../images/dices.jpg";
import NavBar from "~/components/navbar";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-background ">
      <NavBar />
      <div className="text-text relative">
        <div>
          <div className="z-10 grid grid-cols-4 md:grid-cols-12 md:gap-x-5 mx-5 md:mx-12 relative">
            <div className="col-span-full md:col-start-3 md:col-end-11">
              <div className="text-center">
                <h1 className="text-Mh1 md:text-Dh1 my-4">D&D</h1>
                <h1 className="text-Mh1 md:text-Dh1 my-4 font-bold">
                  Quest World
                </h1>
                <p className="text-Mp md:text-Dp my-4">
                  Embark on a Quest for Imagination and Adventure! Explore the
                  realms of Dungeons & Dragons like never before on our
                  platform. Create, share, and play epic adventures in a vibrant
                  community of fellow storytellers and heroes. Join us now and
                  let your journey into fantasy begin!
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-start-3 md:col-end-11 grid md:grid-cols-8 gap-6 text-center my-4 md:text-left">
              <p className="text-Mp md:text-Dp md:col-start-1 md:col-end-3">
                <strong>Craft Your Adventures</strong>
                <br />
                Create your own custom D&D quests, populate them with NPCs and
                monsters, and shape the destiny of heroes.
              </p>
              <p className="text-Mp md:text-Dp md:col-start-4 md:col-end-6">
                <strong>Explore Boundless Realms</strong> <br />
                Dive into a vast collection of player-crafted adventures, each
                offering unique challenges and immersive storytelling.
              </p>
              <p className="text-Mp md:text-Dp md:col-start-7 md:col-end-9">
                <strong>Forge a Heroic Community</strong> <br />
                Connect with fellow adventurers, join or form groups, and share
                your epic tales in our vibrant community forums.
              </p>
            </div>
            <div className="col-span-full mb-12 md:col-start-3 md:col-end-10">
              <div className="">
                <div className="z-10">
                  <h2 className="text-Mh2 md:text-Dh2 relative top-3 font-bold">
                    Join us
                  </h2>
                  <p className="text-Mp md:text-Dp my-4">
                    By joining our platform, you gain access to a treasure trove
                    of user-created content, forge new friendships, and become a
                    part of a dynamic community dedicated to storytelling and
                    exploration. Join us today and let your adventures begin!
                  </p>
                  <button className="bg-primary text-white p-2">Join us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
