import EditCalendarForm from '@/app/components/edit-calendar-form';
import {getCalendarById} from '@/app/lib/data';
import {notFound} from 'next/navigation';

export default async function Page({params}) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);

  if (!calendar) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6">Set up your advent calendar</h1>

      <EditCalendarForm calendar={calendar} />
    </div>
  );
}
