import { AuthWrapper } from "@/lib/wrappers/authenticated";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;
  const events = await prisma?.event.findMany({
    where: {
      userId: user?.id,
    },
  });

  console.log({ events });
  return <AuthWrapper>{children}</AuthWrapper>;
}
