"use client";

import {
  MapPinIcon,
  ClockIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Event } from "@prisma/client";
import { ArrowTopRightOnSquareIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AddressLink } from "../components/address-link";
import Link from "next/link";
import { deleteEvent, EventWithUser } from "./actions";
import { mutate } from "swr";
import Balancer from "react-wrap-balancer";
import { Tooltip } from "react-tooltip";
import StepDots from "../components/step-dots";

export default function Dashboard({ events }: { events: EventWithUser[] }) {
  console.log({ events });
  return (
    <div className="flex animate-slide-down-fade max-w-5xl w-full flex-col items-stretch">
      <Tooltips />
      <h3 className="font-medium mb-3">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col h-96 w-full justify-center items-stretch shadow-lg bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden"
          >
            <div className="flex justify-between items-center px-5 flex-2 bg-blue-300 text-slate-700 gap-5">
              <div className="flex gap-3 items-center">
                <h2
                  className="font-display font-bold text-3xl bg-slate-900 text-blue-300 p-3 rounded-md"
                  data-tooltip-id="initials"
                  data-tooltip-content={event.user?.name ?? "Unknown"}
                >
                  {getInitials(event.user?.name ?? "UNK")}
                </h2>
                <h2 className="text-2xl text-center overflow-ellipsis">
                  {event.name}
                </h2>
              </div>
              <button className="p-2 rounded-md">
                <ArrowTopRightOnSquareIcon className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
            <div className="flex flex-3 items-stretch">
              <div className="flex flex-col justify-around items-center text-center gap-3 flex-1 p-5">
                <div className="flex items-center gap-3 min-w-fit">
                  <ClockIcon
                    className="w-5 h-5"
                    data-tooltip-id="time"
                    data-tooltip-content="Event Time"
                  />
                  <p>{event.time}</p>
                </div>
                <div className="flex items-stretch gap-3 underline underline-offset-2">
                  <MapPinIcon
                    className="h-6 w-6 aspect-square"
                    data-tooltip-id="address"
                    data-tooltip-content="Event Location"
                  />
                  <AddressLink address={event.location} />
                </div>
                <div className="flex items-center gap-3">
                  <UserGroupIcon
                    className="w-5 h-5"
                    data-tooltip-id="total"
                    data-tooltip-content="Confirmed Attendees"
                  />
                  <p>12/38</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-5">
              <StepDots />
            </div>
          </div>
        ))}
        <Link href="/event/create" passHref>
          <button className="flex flex-col h-96 w-full justify-center items-stretch shadow-lg bg-slate-800 rounded-lg overflow-hidden">
            <PlusIcon className=" w-24 h-24 md:w-32 md:h-32 m-auto text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const tooltipStyles = {
  backgroundColor: "rgb(100, 116, 139)",
  opacity: 0.95,
};

const Tooltips = () => {
  return (
    <>
      <Tooltip id="initials" style={tooltipStyles} />
      <Tooltip id="time" style={tooltipStyles} />
      <Tooltip id="address" style={tooltipStyles} />
      <Tooltip id="captains" style={tooltipStyles} />
      <Tooltip id="total" style={tooltipStyles} />
    </>
  );
};
