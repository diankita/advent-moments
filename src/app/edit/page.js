import CreateCalendarForm from '@/app/components/create-calendar-form';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6">Set up your advent calendar</h1>

      <CreateCalendarForm />
    </div>
  );
}
