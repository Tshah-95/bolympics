"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/dashboard",
          })
        }
      >
        sign in here
      </button>
    </div>
  );
}
