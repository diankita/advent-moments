import Link from 'next/link';
import {createCalendar} from '@/app/lib/actions';

export default function CreateCalendarForm() {
  return (
    <form action={createCalendar}>
      <div className="rounded-md mt-10">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="mb-2 block text-lg font-medium text-green-700"
          >
            Calendar title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter the title of your calendar"
            required
            autoComplete="off"
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="author"
            className="mb-2 block text-lg font-medium text-green-700"
          >
            Calendar author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete="off"
            className="peer block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          ></input>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-6">
        <Link
          href="/onboarding"
          className="flex h-10 items-center rounded-lg bg-gray-2
          00 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </form>
  );
}
