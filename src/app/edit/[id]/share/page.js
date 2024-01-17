import {getCalendarById} from '@/app/lib/data';

export default async function Page({params}) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);

  if (!calendar) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6">
        You did it! Share your advent calendar
      </h1>
      <div className="mt-6 break-words">
        <p className="text-xl font-semibold mb-2">
          🗓️ Calendar link (for everybody)
        </p>
        <p>Send this link to anyone you wish to share your calendar with:</p>
        <a
          href={`http://localhost:3000/calendar/${calendarId}`}
          className="text-green-700"
        >
          http://localhost:3000/calendar/{calendarId}
        </a>
      </div>
      <div className="mt-6 break-words">
        <p className="text-xl font-semibold mb-2">
          🛠️ Administration link (only for you)
        </p>
        <p>
          These link allows you to make changes to your calendar even after it
          has been created. Don't send it to anyone unless you want them to make
          changes as well:
        </p>
        <a
          href={`http://localhost:3000/edit/${calendarId}`}
          className="text-green-700"
        >
          http://localhost:3000/edit/{calendarId}
        </a>
      </div>
    </div>
  );
}
