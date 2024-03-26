"use client";
import Balancer from "react-wrap-balancer";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { SplashSection } from "./components/splash";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const descriptors = ["easy", "fast", "fun"];

export default function Splash() {
  const [currDescriptor, setCurrDescriptor] = useState(0);
  const progress = useMotionValue(0);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const animateText = async () => {
      progress.set(0);
      await animate(progress, 0.5, {
        duration: 0.5,
      });
      setCurrDescriptor((currDesc) => (currDesc + 1) % descriptors.length);
      await animate(progress, 1, {
        duration: 0.5,
      });
    };

    const interval = setInterval(() => animateText(), 2500);

    return () => clearInterval(interval);
  }, []);

  const opacity = useTransform(progress, [0, 0.5, 0.5, 1], [1, 0, 0, 1]);
  const promptX = useTransform(progress, [0, 0.5, 0.5, 1], [0, -20, 20, 0]);

  return (
    <>
      <div className="flex animate-slide-down-fade w-full p-3 pt-20 pb-10 shadow-md-white items-center justify-between text-sm rounded-lg bg-gradient-to-br from-red-500 to-orange-400">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="flex flex-col items-center font-display text-center bg-gradient-to-br from-slate-900 to-slate-700 from-50% to-100% bg-clip-text text-transparent  text-5xl font-bold drop-shadow-sm sm:text-6xl md:text-7xl md:leading-[5rem]">
            <p>beer olympics</p>
            <p className="flex justify-center gap-3 sm:gap-4 md:gap-5">
              made
              <motion.span
                className="text-white w-[2em] text-left"
                style={{ x: promptX, opacity }}
              >
                {descriptors[currDescriptor]}
              </motion.span>
            </p>
          </h1>
          <p className="mt-6 text-center font-medium text-md sm:text-xl md:text-2xl w-full max-w-[25em] text-slate-800">
            <Balancer>
              {
                "Invite your captains, pick your events, and coordinate everything. For free."
              }
            </Balancer>
          </p>
          <button
            type="button"
            onClick={() =>
              status === "authenticated"
                ? router.push("/dashboard")
                : signIn("google", { callbackUrl: "/dashboard" })
            }
            className="rounded-md bg-slate-700 px-8 py-4 mt-10 text-xs md:text-md font-semibold text-white shadow-md hover:bg-slate-600"
          >
            Get started now
          </button>
        </div>
      </div>
      <SplashSection
        stepCount="one"
        header="assemble the troops"
        featureList={[
          "Nominate captains or create teams",
          "Custom dashboards for each team",
          "Manage everything with host view",
        ]}
      />
      <SplashSection
        stepCount="two"
        header="build your event"
        featureList={[
          "Pick from all your favorite games",
          "Make advanced (or simple) brackets",
          "Get estimates on time and supplies",
        ]}
      />
      <SplashSection
        stepCount="three"
        header="organize the chaos"
        featureList={[
          "Everyone gets a live schedule",
          "Keep score and track the leaderboard",
          "Opt-in for text notifications",
        ]}
      />
    </>
  );
}
