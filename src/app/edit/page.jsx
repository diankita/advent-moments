import React from "react";
import CreateCalendarForm from "../components/create-calendar-form";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6" id="createCalendarHeader">
        Set up your advent calendar
      </h1>
      {/* Accessibility: Providing context to the form with aria-labelledby */}
      <CreateCalendarForm aria-labelledby="createCalendarHeader" />
    </div>
  );
}

// Accessibility improvements:
// Added an id to the h1 element to provide a unique identifier.
// Included aria-labelledby attribute in the CreateCalendarForm component, referencing the id of the h1 element. This helps screen readers to associate the form with its heading, providing better context for users.
