import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/components/view-day-card';

export default async function Page({params}) {
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
    />
  ));

  return (
    <main className="m-5">
      <div>
        <p>THIS IS YOUR CALENDAR</p>
        <div>Title: {calendar.title}</div>
        <div>By: {calendar.author}</div>
      </div>
      <div className="mt-5">{renderedCards}</div>
    </main>
  );
}
