"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { permanentRedirect } from "next/navigation";

const client = new S3Client({});

export const createEvent = async (formData: FormData) => {
  const eventName = formData.get("event-name") as string;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const eventDetails = formData.get("event-details") as string;
  const photo = formData.get("cover-photo") as File;
  const userId = formData.get("user-id") as string;

  let databaseEntry: {
    name: string;
    time: string;
    location: string;
    details: string;
    photoKey: string | null;
    photoUrl: string | null;
    userId: string;
  } = {
    name: eventName,
    time: date,
    location,
    details: eventDetails,
    photoKey: photo.size > 0 ? uuidv4() : null,
    photoUrl: null,
    userId,
  };

  if (databaseEntry.photoKey) {
    const command = new PutObjectCommand({
      Bucket: "bolympics-image-store-prod",
      Key: databaseEntry.photoKey,
      Body: Buffer.from(await photo.arrayBuffer()),
      ContentType: photo.type,
    });

    databaseEntry.photoUrl = `https://bolympics-image-store-prod.s3.amazonaws.com/${databaseEntry.photoKey}`;

    client.send(command);
  }

  await prisma?.event.create({
    data: databaseEntry,
  });

  permanentRedirect("/dashboard");
};
