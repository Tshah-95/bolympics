"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";

export default function CreateEvent() {
  const [value, setValue] = useState<Date>(new Date());
  const [location, setLocation] = useState<string>("");
  const [preview, setPreview] = useState<any>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const router = useRouter();

  return (
    <form className="animate-slide-down-fade w-full md:w-1/2">
      <div className="flex flex-col items-stretch gap-8">
        <h1 className="w-full text-center mb-2 md:mb-4 p-2 font-display font-black text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-blue-100 to-blue-400 from-50% to-100%">
          enter the basics
        </h1>

        <div className="w-full md:w-1/2 flex flex-col items-stretch">
          <label
            htmlFor="event-name"
            className="block text-sm font-medium leading-6 text-white"
          >
            Event Name
          </label>
          <input
            type="text"
            name="event-name"
            id="event-name"
            placeholder="Something fun"
            className="block mt-2 w-full rounded-md border-0 p-3 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-stretch">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-white"
          >
            Time
          </label>

          <DatePicker
            name="date"
            id="date"
            autoComplete="date"
            showTimeSelect
            selected={value}
            onChange={(date: Date) => setValue(date)}
            dateFormat="Pp"
            className="block w-full mt-2 max-w-none rounded-md border-0 p-3 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full flex flex-col items-stretch">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-white"
          >
            Event Name
          </label>
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => setLocation(place.formatted_address)}
            inputAutocompleteValue={location}
            options={{
              types: ["address"],
            }}
            className="block mt-2 w-full rounded-md border-0 p-3 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full">
          <div className="flex gap-3">
            <label
              htmlFor="event-details"
              className="block text-sm font-medium leading-6 text-white"
            >
              Details
            </label>
            <h3 className="text-gray-400 font-medium">(optional)</h3>
          </div>
          <textarea
            id="event-details"
            name="event-details"
            rows={3}
            placeholder="Write a few sentences about your event."
            className="block mt-2 w-full rounded-md border-0 p-3 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-3">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-white"
            >
              Cover Photo
            </label>
            <h3 className="text-gray-400 font-medium">(optional)</h3>
          </div>
          <div
            className="mt-2 h-48 flex flex-col items-center justify-center rounded-lg border border-dashed border-white/25 px-6 py-10"
            style={{
              backgroundImage: `url(${preview})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center">
              {!preview && (
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-500"
                  aria-hidden="true"
                />
              )}
              <div
                className="mt-4 data-[preview=true]:mt-0 flex text-sm leading-6 text-gray-400"
                data-preview={!!preview}
              >
                <label
                  htmlFor="file-upload"
                  className="relative flex items-center data-[preview=true]:gap-2 data-[preview=true]:bg-slate-800/30 data-[preview=true]:p-3 cursor-pointer rounded-md font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-blue-500 data-[preview=true]:hover:bg-slate-800 data-[preview=true]:text-white"
                  data-preview={!!preview}
                >
                  <span>{!preview ? "Upload a file" : "Change image"}</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  {!!preview && (
                    <PhotoIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  )}
                </label>
                {!preview && <p className="pl-1">and preview it here</p>}
              </div>
              {!preview && (
                <p className="text-xs leading-5 text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-2">
        <button
          type="button"
          className="text-sm font-semibold leading-6 px-4 py-3 rounded-md hover:bg-slate-700 text-white"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-gradient-to-br hover:brightness-90 from-red-500 to-orange-400 px-4 py-3 text-sm font-semibold shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        >
          Create
        </button>
      </div>
    </form>
  );
}
