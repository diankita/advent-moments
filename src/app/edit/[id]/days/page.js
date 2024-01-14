import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/components/day-card';
import Link from 'next/link';

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
      
    />
  ));

  return (
    <main className="m-5">
      <div>
        <p>Calendar info</p>
        <p>Calendar ID: {calendar.id}</p>
        <div>Title: {calendar.title}</div>
        <div>Author: {calendar.author}</div>
      </div>
      <Link href={`/edit/${calendarId}`}>
        <button className="bg-red-200">GO BACK</button>
      </Link>
      <div className="mt-5">
        {renderedCards}
      </div>
    </main>
  );
}
