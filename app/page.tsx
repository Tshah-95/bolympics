"use client";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center gap-10 p-5 md:p-10">
      <div className="flex animate-slide-down-fade max-w-5xl w-full p-3 pt-20 pb-10 items-center justify-between font-mono text-sm rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-stone-400 shadow-md">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="flex flex-col items-center font-display text-center bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent  text-5xl font-bold drop-shadow-sm sm:text-6xl md:text-7xl md:leading-[5rem]">
            <p>beer olympics.</p>
            <p>simplified.</p>
          </h1>
          <p className="mt-6 text-center font-normal text-md sm:text-xl md:text-2xl w-full max-w-[25em] text-slate-700">
            <Balancer>
              {
                "Invite your captains, build your event, and coordinate everything. For free."
              }
            </Balancer>
          </p>
          <button
            type="button"
            className="rounded bg-slate-600 px-8 py-4 mt-10 text-xs md:text-md active:scale-[98%] font-semibold text-white shadow-md hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            Get started now
          </button>
        </div>
      </div>
      <div className="flex animate-slide-down-fade-2 justify-center w-full text-5xl sm:text-6xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 from-65%">
        <h1>step one</h1>
      </div>
      <div className="flex animate-slide-down-fade-3 max-w-5xl w-full h-[50vh] p-3 items-center justify-between font-mono text-sm rounded-lg bg-slate-700  shadow-md"></div>
      <div className="flex max-w-5xl w-full h-[50vh] p-3 items-center justify-between font-mono text-sm rounded-lg  bg-slate-700 shadow-md"></div>
    </main>
  );
}
