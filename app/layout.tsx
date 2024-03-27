import type { Metadata } from "next";
import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";
import Nav from "./components/nav";
import { SessionWrapper } from "../lib/wrappers/session";
import "react-datepicker/dist/react-datepicker.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "bolympics",
  description: "beer olympics made easy, fast, and fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          sfPro.variable,
          inter.variable,
          "bg-[url('/y-so-serious.png')] text-white flex flex-col items-center pt-16 min-h-[100vh] w-full"
        )}
      >
        <Suspense fallback="">
          <Nav />
        </Suspense>
        <SessionWrapper>
          <main className="flex flex-1 flex-col items-center gap-10 p-5 md:p-10 max-w-5xl w-full">
            {children}
          </main>
        </SessionWrapper>
        <Analytics />
      </body>
    </html>
  );
}
