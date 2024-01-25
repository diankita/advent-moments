import Link from "next/link";
import { createCalendar } from "@/app/lib/actions";

export default function CreateCalendarForm() {
  return (
    <form action={createCalendar}>
      <div className="rounded-md mt-10">
        {/* Accessibility: Grouping each input with its label for better screen reader support */}
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
            // Accessibility: Adding aria-describedby to link the input with instructions or requirements
            aria-describedby="titleInstructions"
          ></input>
          {/* Accessibility: Adding instructions or requirements for the input */}
          <p id="titleInstructions" className="sr-only">
            Enter a title for your calendar, this field is required.
          </p>
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
            aria-describedby="authorInstructions"
          ></input>
          <p id="authorInstructions" className="sr-only">
            Enter your name as the author of the calendar, this field is
            required.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-6">
        {/* Accessibility: Providing a clear label for links acting as buttons */}
        <Link
          href="/onboarding"
          className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
          aria-label="Cancel and return to the previous page"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          // Accessibility: Adding an aria-label for better understanding of the button's purpose
          aria-label="Submit the form to create a new calendar"
        >
          Next
        </button>
      </div>
    </form>
  );
}

// Accessibility added:
// Grouping each input with its label for better screen reader support
// Adding aria-describedby to link the input with instructions or requirements
// Adding instructions or requirements for the input
// Providing a clear label for links acting as buttons
// Adding an aria-label for better understanding of the button's purpose
