"use client";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Balancer from "react-wrap-balancer";

export default function Login() {
  return (
    <div
      className="flex animate-slide-down-fade max-w-5xl w-full flex-col data-[empty=true]:flex-1 items-center justify-center"
      data-empty={true}
    >
      <div className="flex flex-col w-full justify-center items-center border-2 bg-slate-700 border-slate-600 py-10 md:py-16 rounded-lg">
        <LockClosedIcon className="w-16 h-16 md:w-24 md:h-24" />
        <h1 className="flex items-center font-display select-none text-center text-white bg-clip-text text-transparent text-5xl font-bold drop-shadow-xl sm:text-6xl md:text-7xl md:leading-[5rem]">
          <pre> oops</pre>...
        </h1>
        <Balancer className="mt-4 md:mt-6 text-center text-md sm:text-lg md:text-xl w-2/3">
          Looks like you need to log in to access this page.
        </Balancer>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="mt-6 md:mt-10 bg-gradient-to-br flex items-center gap-3 from-slate-500 to-slate-400 hover:brightness-90 text-md py-3 px-5 md:text-lg font-medium md:py-4 md:px-6 rounded-lg"
        >
          Login Now
        </button>
      </div>
    </div>
  );
}
