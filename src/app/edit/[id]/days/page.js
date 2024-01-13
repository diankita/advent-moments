// import {useEffect, useState} from 'react';
import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/ui/edit/day-card';

export default async function Page({params}) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);
  console.log(calendar.calendarDays[23])
  // console.log(dayCards);
  // const card = {
  //   title: title
  // }
  // const [cards, setCards] = useState()

  return (
    <main className='m-5'>
      <div>
        <p>Calendar info</p>
        <p>Calendar ID: {calendar.id}</p>
        <div>Title: {calendar.title}</div>
        <div>Author: {calendar.author}</div>
      </div>
      <div className='mt-5'>
      {calendar.calendarDays.map((_, index) => (
        <DayCard key={index} index={index} calendarId={calendarId} />
      ))}
      </div>
    </main>
  );
}
