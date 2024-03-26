"use client";

import { MapPinIcon, ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Event } from "@prisma/client";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { AddressLink } from "../components/address-link";

export default function Dashboard({ events }: { events: Event[] }) {
  return (
    <div className="flex animate-slide-down-fade max-w-5xl w-full flex-col items-stretch">
      <h3 className="font-medium mb-3">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
        {events.map((event) => (
          <div className="flex flex-col h-80 w-full justify-center items-stretch border-[1px] bg-slate-700 border-slate-600 rounded-lg overflow-hidden">
            <div className="flex flex-1 justify-between bg-slate-500 items-center px-3">
              <button className="p-2 bg-red-500 shadow-sm rounded-md">
                <TrashIcon className="w-5 h-5 cursor-pointer" />
              </button>
              <h2 className="text-2xl flex-1 text-center font-display overflow-ellipsis">
                {event.name}
              </h2>
              <button className="p-2 shadow-sm rounded-md">
                <ArrowTopRightOnSquareIcon className="w-6 h-6 cursor-pointer text-white" />
              </button>
            </div>
            <div className="flex flex-2 bg-slate-500 relative">
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
      </div>
    </div>
  );
}
