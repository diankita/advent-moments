import {getCalendarById} from '@/app/lib/data';

export default async function Page({params}) {
  const calendarId = params.id;
  console.log(calendarId)
  const calendar = await getCalendarById(calendarId);
  console.log(calendar)

  return (
    <main>
      <p>Calendar</p>
      <p>ID: {calendar.id}</p>
      <div>Title: {calendar.title}</div>
      <div>Author: {calendar.author}</div>
    </main>
  );
}
