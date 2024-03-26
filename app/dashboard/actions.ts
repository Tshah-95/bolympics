"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Event } from "@prisma/client";

export const getEvents = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user;
  let events: Event[] = [];

  if (session?.user)
    events = await prisma?.event.findMany({
      where: {
        userId: user?.id,
      },
    });

  return events;
};
