"use client";

import Login from "@/app/login/page";
import { useSession } from "next-auth/react";

export const AuthWrapper = (props: { children: React.ReactNode }) => {
  const session = useSession();
  return session.status === "loading" || session.status === "authenticated" ? (
    props.children
  ) : (
    <Login />
  );
};
