import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/components/view-day-card';

export default async function Page({params}) {
  // fetch the corrsponding calendar
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);
  const calendarDaysArr = calendar.calendarDays;

  // render the calendar days in random order
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
    />
  ));

  // display only corresponding days (the current day and/or previous ones)
  const calStartDate = calendar.startDate;

  // TODO: update to real date after testing
  const today = new Date('2024-01-10').getDate();

  return (
    <main className="p-4 bg-emerald-900">
      <div className="border-dashed border-2 border-green-50 text-green-50 p-2 mx-5">
        <div className="text-3xl text-center">{calendar.title}</div>
        <div className="text-xl text-end italic">By {calendar.author}</div>
      </div>
      <div className="mt-5 flex flex-wrap">{renderedCards}</div>
    </main>
  );
}
