import { getCalendarById } from "@/app/lib/data";
import DayCard from "@/app/components/view-day-card";

export default async function Page({ params }) {
  // fetch the corrsponding calendar
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);
  const calendarDaysArr = calendar.calendarDays;

  const shuffledDays = [...calendarDaysArr];
  for (let i = shuffledDays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDays[i], shuffledDays[j]] = [shuffledDays[j], shuffledDays[i]];
  }
  const renderedCards = shuffledDays.map((calendarDay, index) => (
    <DayCard
      key={index}
      dayNb={calendarDay.dayNumber}
      calendarId={calendarId}
      text={calendarDay.text}
      imageUrl={calendarDay.imageUrl}
      // 🟢 Accessibility: Providing alternative text for images
      alt={`Calendar day ${calendarDay.dayNumber} image`} // added alt attribute
    />
  ));

  // display only corresponding days (the current day and/or previous ones)
  const calStartDate = calendar.startDate;

  // TODO: update to real date after testing
  const today = new Date("2024-01-10").getDate();

  return (
    <main className="p-4 bg-emerald-900">
      {/* 🟢 Accessibility: Adding a descriptive title and heading structure */}
      <h1 id="calendarTitle" className="sr-only">
        {calendar.title} by {calendar.author}
      </h1>
      <div className="border-dashed border-2 border-green-50 text-green-50 p-2 mx-5">
        {/* 🟢 Added aria-hidden="true" to the text elements that are decorative or duplicated by the h1 to prevent screen readers from reading the same information twice. */}
        <div className="text-3xl text-center" aria-hidden="true">
          {calendar.title}
        </div>
        <div className="text-xl text-end italic" aria-hidden="true">
          By {calendar.author}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap">{renderedCards}</div>
    </main>
  );
}

// Accessibility added:
// - alt attribute to images
// - title and heading structure
// - aria-hidden="true" to the text elements that are decorative or duplicated by the h1 to prevent screen readers from reading the same information twice.
