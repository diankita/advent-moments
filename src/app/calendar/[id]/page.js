import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/components/view-day-card';

export default async function Page({params}) {
  const calendarId = params.id;

  const calendar = await getCalendarById(calendarId);
  const calendarDaysArr = calendar.calendarDays;

  const shuffledDays = [...calendarDaysArr];
  for (let i = shuffledDays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDays[i], shuffledDays[j]] = [shuffledDays[j], shuffledDays[i]];
  }

  console.log(calendar);
  const renderedCards = shuffledDays.map((calendarDay, index) => (
    <DayCard
      key={index}
      dayNb={calendarDay.dayNumber}
      calendarId={calendarId}
      text={calendarDay.text}
      imageUrl={calendarDay.imageUrl}
    />
  ));

  return (
    <main className="m-4">
      <div>
        <p>THIS IS YOUR CALENDAR</p>
        <div>Title: {calendar.title}</div>
        <div>By: {calendar.author}</div>
      </div>
      <div className="mt-5 flex flex-wrap">{renderedCards}</div>
    </main>
  );
}
