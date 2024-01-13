import CreateCalendarForm from '@/app/components/create-calendar-form';
import CalendarList from '@/app/components/calendar-list';

export default function CreatePage() {
  return (
    <div>
      <h1>Set up your advent calendar</h1>

      <CreateCalendarForm />
      <CalendarList />
    </div>
  );
}
