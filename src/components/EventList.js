"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import concert from "../../public/concert.jpg";
import Image from "next/image";

export default function EventList({ eventList }) {
  const router = useRouter();
  if (!eventList || eventList.length === 0) {
    console.log("Eventlist is empty");
    return <p className="text-sm font-medium">No events yet</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {eventList.map((event) => (
        <div
          key={event._id}
          onClick={() => {
            router.push(`/event/${event._id}`);
          }}
          className="w-full max-w-lg p-4 bg-white border border-gray-300 rounded-lg shadow-md items-center space-x-4"
        >
          {/* Event Image */}
          <Image
            src={concert}
            alt="concert-image"
            className="w-100 h-100 rounded-lg object-cover"
          />

          {/* Event Details */}
          <div>
            {/* Event Name */}
            <h2 className="text-2xl font-bold text-gray-800">
              {event.eventName}
            </h2>

            {/* Date and Venue */}
            <div className="text-gray-600 mt-2">
              <p className="text-md font-medium">
                📅 Date: {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p className="text-md font-medium">📍 Venue: {event.venue}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
