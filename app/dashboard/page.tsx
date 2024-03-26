"use client";

import { getEvents } from "./actions";
import Dashboard from "./dashboard";
import DashboardEmpty from "./dashboard-empty";
import useSWR from "swr";

export default function DashServer() {
  const { data: events, isLoading } = useSWR("events", getEvents);
  return isLoading ? null : events && events.length > 0 ? (
    <Dashboard events={events} />
  ) : (
    <DashboardEmpty />
  );
}
