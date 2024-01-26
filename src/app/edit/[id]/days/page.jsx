import React from "react";
import { getCalendarById } from "@/app/lib/data";
import DayCard from "@/app/components/edit-day-card";
import Link from "next/link";

export default async function Page({ params }) {
  const calendarId = params.id;

  const calendar = await getCalendarById(calendarId);
  const calendarDays = calendar.calendarDays;

  const renderedCards = calendarDays.map((calendarDay, index) => (
    <DayCard
      key={index}
      index={index}
      calendarId={calendarId}
      text={calendarDay.text}
      imageUrl={calendarDay.imageUrl}
      // Accessibility: Providing alternative text for images
      alt={`Calendar day ${index + 1} image`} // added alt attribute
    />
  ));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6">Add messages and photos</h1>
      <div className="mt-4 text-lg">
        ✍️ Title: <span className="font-semibold">{calendar.title}</span>
      </div>
      <div className="mt-2 text-lg">
        👤 Author: <span className="font-semibold">{calendar.author}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        PS: You can also come back and continue later, your progress will be
        saved
      </p>
      <div className="mt-5 flex flex-wrap" aria-live="polite">
        {renderedCards}
      </div>

      <div className="mt-8 flex justify-end gap-6">
        <Link
          href={`/edit/${calendarId}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          aria-label="Return to the calendar editing page"
        >
          Back
        </Link>
        <Link
          href={`/edit/${calendarId}/share`}
          className="flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          aria-label="Proceed to share your calendar"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

// Accessibility improvements:
// Added alt attribute to DayCard image elements to provide alternative text, crucial for screen readers to describe the content of images.
// Included aria-live="polite" for the container that holds the day cards. This ensures that updates to this content are announced by screen readers in a non-intrusive way.
// Provided clear, descriptive aria-label attributes for the navigation links to ensure that their purpose is understood by users of assistive technologies.
