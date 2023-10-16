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
          <div>
            <img
              className="absolute opacity-30 w-full h-auto"
              src={castle}
              alt="Background"
            />
          </div>
          <div className="z-10 grid grid-cols-4 mx-5 relative">
            <div className="col-span-full">
              <div className="text-center">
                <h1 className="text-Mh1 my-4">D&D</h1>
                <h1 className="text-Mh1 my-4 font-bold">Quest World</h1>
                <p className="text-Mp my-4">
                  Embark on a Quest for Imagination and Adventure! Explore the
                  realms of Dungeons & Dragons like never before on our
                  platform. Create, share, and play epic adventures in a vibrant
                  community of fellow storytellers and heroes. Join us now and
                  let your journey into fantasy begin!
                </p>
              </div>
            </div>
            <div className="col-span-4 grid gap-6 text-center my-4">
              <p className="text-Mp">
                <strong>Craft Your Adventures</strong>
                <br />
                Create your own custom D&D quests, populate them with NPCs and
                monsters, and shape the destiny of heroes.
              </p>
              <p className="text-Mp">
                <strong>Explore Boundless Realms</strong> <br />
                Dive into a vast collection of player-crafted adventures, each
                offering unique challenges and immersive storytelling.
              </p>
              <p className="text-Mp">
                <strong>Forge a Heroic Community</strong> <br />
                Connect with fellow adventurers, join or form groups, and share
                your epic tales in our vibrant community forums.
              </p>
            </div>
            <div className="col-span-full mb-12">
              <div className="">
                <div className="z-10">
                  <h2 className="text-Mh2 relative top-3 font-bold">Join us</h2>
                  <p className="text-Mp my-4">
                    By joining our platform, you gain access to a treasure trove
                    of user-created content, forge new friendships, and become a
                    part of a dynamic community dedicated to storytelling and
                    exploration. Join us today and let your adventures begin!
                  </p>
                  <button className="bg-primary text-white p-2 mb-">
                    Join us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={dice}
              alt="Background"
              className=" opacity-20 w-full h-auto absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
