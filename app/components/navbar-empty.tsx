import Image from "next/image";
import Link from "next/link";

export default function NavBarEmpty() {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center data-[scrolled=true]:bg-slate-700/30 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=false]:bg-slate-600/0 z-30 transition-all">
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-center w-full">
          <Link
            href="/"
            className="flex items-center font-display text-2xl text-white"
          >
            <Image
              src="/bolympics-title.png"
              alt="bolympics logo"
              width="150"
              height="30"
            />
          </Link>
        </div>
      </div>
    </>
  );
}