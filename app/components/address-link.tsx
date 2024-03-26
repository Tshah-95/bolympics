import Link from "next/link";
import React from "react";

export const AddressLink = ({ address }: { address: string }) => {
  const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
  const encodedAddress = encodeURIComponent(address);
  const fullUrl = `${baseUrl}${encodedAddress}`;

  return (
    <Link
      target="_blank"
      href={fullUrl}
      className="text-blue-400 hover:brightness-90"
    >
      {address}
    </Link>
  );
};
