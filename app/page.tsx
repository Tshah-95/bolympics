"use client";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex z-10 max-w-5xl w-full flex-[0.4_0.4_0%] items-center justify-between font-mono text-sm rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-stone-400 ">
        <div className="flex flex-col w-full justify-center items-center text-black gap-5 md:gap10">
          <h1 className="flex flex-col items-center font-display text-center text-5xl font-bold drop-shadow-sm sm:text-6xl md:text-7xl md:leading-[5rem]">
            <p>beer olympics.</p>
            <p>simplified.</p>
          </h1>
          <p className="mt-6 text-center font-medium md:text-xl w-[20em]">
            <Balancer>
              {
                "Pick your captains, games, and set a price. We'll handle the rest."
              }
            </Balancer>
          </p>
        </div>
      </div>
    </main>
  );
}
