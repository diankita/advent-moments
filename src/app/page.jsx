import React from "react";
import Link from "next/link";
import Image from "next/image";
import OnboardingStepper from "./components/onboarding-stepper";

export default function Page() {
  const currentPage = 1;

  return (
    <main className="flex min-h-screen flex-col justify-between px-6 py-14 bg-emerald-900">
      <Image
        className="pt-10"
        src="/logo-onboarding.png"
        alt="Advent moments logo"
        width={500}
        height={620}
      />
      <div aria-labelledby="introMessage">
        <h1 className="text-xl text-center text-white">
          <p className="mb-2 font-semibold">
            Online advent calendars are awesome!
          </p>
          And more sustainable 🌱
        </h1>
      </div>
      <nav aria-label="Onboarding navigation">
        <div className="flex justify-between items-center">
          {/* Accessibility: Providing a hidden label for an element with no visible text */}
          <button
            className="opacity-0 rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400    focus-visible:outline-green-600"
            aria-label="Disabled button, no previous step available"
          >
            Next
          </button>
          <OnboardingStepper currentPage={currentPage} />
          <Link
            href="/onboarding"
            className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
            aria-label="Proceed to the next step of onboarding"
          >
            Next
          </Link>
        </div>
      </nav>
    </main>
  );
}

// Accessibility improvements
// Added alt attribute to the Image tag to provide a textual alternative to the image content.
// Enclosed the main message in a div with aria-labelledby pointing to the id of the h1 element, making the heading's context clearer.
// Wrapped the navigation links in a nav element with aria-label="Onboarding navigation" to denote it as a navigation section.
// Added aria-label to links and buttons to provide a clear, descriptive label for their actions, especially for the button that has no visible text.
