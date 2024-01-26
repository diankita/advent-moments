import EditCalendarForm from "@/app/components/edit-calendar-form";
import { getCalendarById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);

  if (!calendar) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6" id="editCalendarHeader">
        Set up your advent calendar
      </h1>
      {/* Accessibility: Providing context to the form with aria-labelledby */}
      aria-labelledby="editCalendarHeader"
      <EditCalendarForm calendar={calendar} />
    </div>
  );
}

// Accessibility improvements:
// Added an id to the h1 element to provide a unique identifier.
// Included aria-labelledby attribute in the EditCalendarForm component,
// referencing the id of the h1 element. This helps screen readers to associate the form with its heading, providing better context for users.
