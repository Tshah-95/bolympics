"use client";

import { MapPinIcon, ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Event } from "@prisma/client";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AddressLink } from "../components/address-link";
import Link from "next/link";
import { deleteEvent } from "./actions";
import { mutate } from "swr";

export default function Dashboard({ events }: { events: Event[] }) {
  return (
    <div className="flex animate-slide-down-fade max-w-5xl w-full flex-col items-stretch">
      <h3 className="font-medium mb-3">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col h-80 w-full justify-center items-stretch shadow-lg border-[1px] bg-slate-700 border-slate-600 hover:shadow-2xl hover:scale-[1.01] rounded-lg overflow-hidden"
          >
            <div className="flex flex-1 justify-between bg-slate-500 items-center px-3">
              <button
                className="p-2 bg-red-600 shadow-sm rounded-md"
                onClick={() =>
                  deleteEvent(event.id).then(() => mutate("events"))
                }
              >
                <TrashIcon className="w-5 h-5 cursor-pointer" />
              </button>
              <h2 className="text-2xl flex-1 text-center font-display overflow-ellipsis">
                {event.name}
              </h2>
              <button className="p-2 rounded-md">
                <ArrowTopRightOnSquareIcon className="w-6 h-6 cursor-pointer text-white" />
              </button>
            </div>
            <div className="flex flex-2 bg-gradient-to-b from-slate-500 to-slate-700 from-60% to-100% relative">
              <Image
                src={
                  event.photoUrl ??
                  "https://bolympics-image-store-prod.s3.amazonaws.com/f85b6dc8-0967-4e29-83e2-182772bf659f"
                }
                alt="cover-image"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 flex-2">
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5" />
                <p>{event.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5" />
                <AddressLink address={event.location} />
              </div>
            </div>
          </div>
        ))}
        <Link href="/event/create" passHref>
          <button className="flex flex-col h-80 w-full justify-center items-stretch border-[1px] bg-slate-700 border-slate-600 rounded-lg overflow-hidden">
            <PlusIcon className=" w-24 h-24 md:w-32 md:h-32 m-auto text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
}
