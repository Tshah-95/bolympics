"use client";

import Balancer from "react-wrap-balancer";
import { PlusIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function DashboardEmpty() {
  return (
    <>
      <div
        className="flex animate-slide-down-fade max-w-5xl w-full flex-col data-[empty=true]:flex-1 items-center justify-center"
        data-empty={true}
      >
        <div className="flex flex-col w-full justify-center items-center border-2 bg-slate-700 border-slate-600 py-10 md:py-16 rounded-lg">
          <CalendarDaysIcon className="w-16 h-16 md:w-24 md:h-24 mb-8 md:mb-12" />
          <h1 className="flex flex-col items-center font-display text-center bg-gradient-to-br from-blue-100 to-blue-400 from-50% to-100% bg-clip-text text-transparent text-5xl font-bold drop-shadow-xl sm:text-6xl md:text-7xl md:leading-[5rem]">
            <p>make your</p>
            <p>first event</p>
          </h1>
          <Balancer className="mt-4 md:mt-6 text-center text-md sm:text-lg md:text-xl w-2/3">
            Or just check out some of our templates{" "}
            <span className="text-blue-400">here.</span>
          </Balancer>
          <Link href="/event/create" passHref>
            <button
              type="button"
              className="mt-10 md:mt-16 bg-gradient-to-br flex items-center gap-3 from-red-500 to-orange-400 hover:brightness-90 text-md py-3 px-5 md:text-lg font-medium md:py-4 md:px-6 rounded-lg"
            >
              <PlusIcon className="w-5 h-5 md:w-6 md:h-6" />
              Create New
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
