"use client";

import { SessionProvider } from "next-auth/react";

export const SessionWrapper = (props: {
  children: React.ReactNode;
  pageProps?: any;
}) => {
  return (
    <SessionProvider session={props?.pageProps?.session}>
      {props.children}
    </SessionProvider>
  );
};
