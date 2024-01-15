import EditCalendarForm from '@/app/components/edit-calendar-form';
import {getCalendarById} from '@/app/lib/data';
import {notFound} from 'next/navigation';

export default async function EditPage ({ params }) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);

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
