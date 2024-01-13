import { editCalendar } from "../lib/actions";
import Link from "next/link";

export default function EditCalendarForm ({ calendar }) {
  console.log(calendar.title, 'title from edit form')
  const id = calendar.id;
  console.log(id, 'id from edit form')

  const editCalendarWithId = editCalendar.bind(null, calendar.id)
  return (
    <form action={editCalendarWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-5">
          <label htmlFor="title" className="mb-2 block text-lg font-medium">
            Calendar title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter the title of your calendar"
            required
            autoComplete="off"
            defaultValue={calendar.title}
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          ></input>
        </div>
        <div className="mb-5">
          <label htmlFor="author" className="mb-2 block text-lg font-medium">
            Calendar author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete="off"
            defaultValue={calendar.author}
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          ></input>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          className="'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
