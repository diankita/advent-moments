import { updateCalendarDay } from "@/app/lib/actions";

export default function DayForm ({ handleOpen, calendarId, index }) {
  const updateCalendarDaywithId = updateCalendarDay.bind(null, calendarId);
  const updateCalFinal = updateCalendarDaywithId.bind(null, index);

  return (
    <form action={updateCalFinal}>
      <div className="rounded-md my-4 p-4 md:p-6">
        <div className="mb-5">
          <label htmlFor="msg" className="mb-2 block text-g font-medium">
            Your message
          </label>
          <textarea
            id="msg"
            name="msg"
            rows={3}
            placeholder="Enter your message"
            required
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="image_url" className="mb-2 block text-g font-medium">
            Image URL
            <span className="text-sm italic text-gray-400"> (optional)</span>
          </label>
          <input
            id="title"
            name="image_url"
            type="url"
            placeholder="Enter an image URL"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="d:none" name='calendar_id' value={calendarId}></div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={handleOpen}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={handleOpen}
          className="'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
