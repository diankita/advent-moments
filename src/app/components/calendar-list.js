import { getAllCalendars } from "@/app/lib/data";


export default async function CalendarList () {
  const calendars = await getAllCalendars();

  if (!calendars || calendars.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div>
      <p>Calendars list</p>
      <div>
        {calendars.map((calendar) => (
          <div key={calendar.id}>
            {calendar.title} - {calendar.author}
          </div>
        ))}
      </div>
    </div>
  );
}