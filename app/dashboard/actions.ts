"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Event, User } from "@prisma/client";

export type EventWithUser = Event & { user: User };

export const getEvents = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user;
  let events: EventWithUser[] = [];

  if (session?.user)
    events = await prisma?.event.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
      },
    });

  return events;
};

export const deleteEvent = async (eventId: string) => {
  return await prisma?.event.delete({
    where: {
      id: eventId,
    },
  });
};
