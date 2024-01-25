import Link from "next/link";
import Image from "next/image";
import OnboardingStepper from "@/app/components/onboarding-stepper";

export default function Page() {
  const currentPage = 2;

  return (
    <main className="flex min-h-screen flex-col justify-between px-6 py-14 bg-emerald-900">
      <Image
        className="pt-10"
        src="/logo-onboarding.png"
        alt="app-logo"
        width={500}
        height={620}
      />
      <div aria-labelledby="onboardingMessage">
        <h1 id="onboardingMessage" className="text-lg text-center text-white">
          <p className="mb-2 font-semibold text-xl">
            Personalize your calendar 👩‍🎨
          </p>
          Choose a title, add your messages & pictures and share with your loved
          one
        </h1>
      </div>
      <nav aria-label="Onboarding navigation">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
            aria-label="Go back to the previous step"
          >
            Back
          </Link>
          <OnboardingStepper currentPage={currentPage} />
          <Link
            href="/edit"
            className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
            aria-label="Proceed to calendar editing"
          >
            Start
          </Link>
        </div>
      </nav>
    </main>
  );
}

// Wrapped the main content in a main tag to define it as the primary content of the document.
// Added an alt attribute to the Image tag to provide a textual alternative to the image content.
// Enclosed the main message in a div with aria-labelledby pointing to the id of the h1 element, making the heading's context clearer.
// Wrapped the navigation links in a nav element with aria-label="Onboarding navigation" to denote it as a navigation section.
// Added aria-label to links to provide a clear, descriptive label for their actions.
