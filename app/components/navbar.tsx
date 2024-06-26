"use client";

import useScroll from "@/lib/hooks/use-scroll";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);
  const router = useRouter();
  const pathname = usePathname();

  const firstName = session?.user?.name?.split(" ")[0]?.toLowerCase();

  return (
    <>
      <div
        className="fixed top-0 w-full flex animate-slide-down-fade-2 justify-between items-center px-5 md:px-10 data-[scrolled=true]:bg-slate-800/30 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=false]:bg-slate-700/0 z-30 transition-all"
        data-scrolled={scrolled}
      >
        <div className="flex justify-center items-center h-16">
          <Link
            href="/dashboard"
            className="flex items-center font-display text-2xl text-white hover:brightness-90"
          >
            <Image
              src="/bolympics-title.png"
              alt="bolympics logo"
              width="150"
              height="30"
              className="hidden md:block"
            />
            <HomeIcon className="md:hidden w-6 h-6" />
          </Link>
        </div>
        <div className="flex gap-5 items-center font-medium content-center">
          {session?.user ? (
            pathname !== "/" ? (
              <button
                className="flex items-center justify-center h-full relative"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                sign out
              </button>
            ) : (
              <Link href="/dashboard">Dashboard</Link>
            )
          ) : (
            <button
              className="font-medium"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
}
