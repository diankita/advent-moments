import {updateCalendarDay} from '@/app/lib/actions';

export default function DayForm({
  handleOpen,
  calendarId,
  index,
  text,
  imageUrl,
}) {
  const updateCalendarDaywithId = updateCalendarDay.bind(null, calendarId);
  const updateCalFinal = updateCalendarDaywithId.bind(null, index);

  return (
    <form action={updateCalFinal} onSubmit={handleOpen}>
      <div className="rounded-md p-4 md:p-6">
        <div className="mb-5">
          <label
            htmlFor="msg"
            className="mb-2 block text-g font-medium text-green-700"
          >
            Your message
          </label>
          <textarea
            id="msg"
            name="msg"
            rows={6}
            placeholder="Enter your message"
            required
            defaultValue={text}
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="image_url"
            className="mb-2 block text-g font-medium text-green-700"
          >
            Image URL
            <span className="text-sm italic text-gray-400"> (optional)</span>
          </label>
          <input
            id="title"
            name="image_url"
            type="url"
            autoComplete='off'
            placeholder="Enter an image URL"
            defaultValue={imageUrl}
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <img src={imageUrl} className="max-w-[80%] max-h-48 mx-auto" />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={handleOpen}
          className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          className="'flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
