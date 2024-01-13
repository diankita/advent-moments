import EditCalendarForm from '@/app/components/edit-calendar-form';
import {getCalendarById} from '@/app/lib/data';
import {notFound} from 'next/navigation';

export default async function EditPage ({ params }) {
  const calendarId = params.id;
  console.log(calendarId, 'calendarId from edit page');
  const calendar = await getCalendarById(calendarId);
  console.log(calendar, 'calendar from edit page');

  if (!calendar) {
    notFound();
  }

  return (
    <div>
      <div>Edit page</div>
      <EditCalendarForm calendar={calendar} />
    </div>
  );
}
