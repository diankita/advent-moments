import {getCalendarById} from '@/app/lib/data';
import DayCard from '@/app/components/edit-day-card';
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
      imageUrl={calendarDay.imageUrl}
    />
  ));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6">Add messages and photos</h1>
      <div className="mt-4 text-lg">
        ✍️ Title: <span className="font-semibold">{calendar.title}</span>
      </div>
      <div className="mt-2 text-lg">
        {' '}
        👤 Author: <span className="font-semibold">{calendar.author}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        PS: You can also come back and continue later, your progress will be
        saved
      </p>
      <div className="mt-5 flex flex-wrap">{renderedCards}</div>

      <div className="mt-8 flex justify-end gap-6">
        <Link
          href={`/edit/${calendarId}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Back
        </Link>
        <Link
          href={`/edit/${calendarId}/share`}
          className="flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
