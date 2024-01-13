// import {useEffect, useState} from 'react';
import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/ui/edit/day-card';

export default async function Page({params}) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);
  // console.log(calendar)
  const dayCards = new Array(24);
  // console.log(dayCards);
  // const card = {
  //   title: title
  // }
  // const [cards, setCards] = useState()

  return (
    <main>
      <div>
        <p>Calendar info</p>
        <p>ID: {calendar.id}</p>
        <div>Title: {calendar.title}</div>
        <div>Author: {calendar.author}</div>
      </div>
      <DayCard />
      {dayCards.map((_, index) => (
        <DayCard key={index} dayNb={index + 1} calendarId={calendarId} />
      ))}
    </main>
  );
}
