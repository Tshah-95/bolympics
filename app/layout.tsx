import type { Metadata } from "next";
import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";
import Nav from "./components/nav";
import { SessionWrapper } from "../lib/wrappers/session";

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
          "bg-slate-800 text-white flex flex-col pt-16 min-h-[100vh] w-full"
        )}
      >
        <Suspense fallback="">
          <Nav />
        </Suspense>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
