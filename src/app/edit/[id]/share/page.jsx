import { getCalendarById } from "@/app/lib/data";

export default async function Page({ params }) {
  const calendarId = params.id;
  const calendar = await getCalendarById(calendarId);

  if (!calendar) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-6" id="shareCalendarHeader">
        You did it! Share your advent calendar
      </h1>
      <div className="mt-6 break-words">
        <h2 className="text-xl font-semibold mb-2" id="publicLinkSection">
          🗓️ Calendar link (for everybody)
        </h2>
        <p>Send this link to anyone you wish to share your calendar with:</p>
        <a
          href={`http://localhost:3000/calendar/${calendarId}`}
          className="text-green-700"
        >
          http://localhost:3000/calendar/{calendarId}
        </a>
      </div>
      <div className="mt-6 break-words">
        <h2 className="text-xl font-semibold mb-2" id="adminLinkSection">
          🛠️ Administration link (only for you)
        </h2>
        <p>
          These link allows you to make changes to your calendar even after it
          has been created. Don't send it to anyone unless you want them to make
          changes as well:
        </p>
        <a
          href={`http://localhost:3000/edit/${calendarId}`}
          className="text-green-700"
          // Accessibility: Describing the purpose of the link
          aria-describedby="adminLinkSection"
        >
          http://localhost:3000/edit/{calendarId}
        </a>
      </div>
    </div>
  );
}

// Accessibility improvements:
// Used headings (h1 for the page title and h2 for sections) to structure the content semantically, making it easier for screen reader users to understand and navigate the content.
// Added aria-describedby attributes to links, pointing to the IDs of the headings. This provides screen reader users with more context about the purpose of the links.
