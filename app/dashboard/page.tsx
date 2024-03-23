"use client";

import { AuthWrapper } from "@/lib/wrappers/authenticated";
import Balancer from "react-wrap-balancer";

export default function Dashboard() {
  return (
    <AuthWrapper>
      <main className="flex flex-1 flex-col items-center gap-10 p-5 md:p-10">
        <div
          className="flex animate-slide-down-fade max-w-5xl w-full flex-col data-[empty=true]:flex-1 items-center justify-center"
          data-empty={true}
        >
          <div className="flex flex-col w-full justify-center items-center border-2 bg-slate-700 border-slate-600 flex-[0.5_0.5_0%] md:flex-none md:h-[50vh] rounded-lg">
            <h1 className="flex flex-col items-center font-display text-center bg-gradient-to-br from-blue-100 to-blue-400 from-50% to-100% bg-clip-text text-transparent text-5xl font-bold drop-shadow-xl sm:text-6xl md:text-7xl md:leading-[5rem]">
              <p>make your</p>
              <p>first event</p>
            </h1>
            <Balancer className="mt-4 text-center text-md sm:text-lg md:text-xl w-2/3">
              Or just check out some of our templates{" "}
              <span className="text-blue-400">here.</span>
            </Balancer>
            <button
              type="button"
              className="mt-8 md:mt-12 bg-gradient-to-br from-red-500 to-orange-400 text-md py-3 px-6 md:text-lg font-medium md:py-4 md:px-8 rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </AuthWrapper>
  );
}
