import Link from 'next/link';
import Image from 'next/image';
import OnboardingStepper from './components/onboarding-stepper';

export default function Homepage () {
  const currentPage = 1;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-14 bg-emerald-900">
      <Image
        src="/logo-onboarding.png"
        alt="app-logo"
        width={500}
        height={620}
      />
      <h1 className="text-xl text-center">
        Advent calendars are awesome
        <br />
        (and more sustainable 🌱)
      </h1>
      <OnboardingStepper currentPage={currentPage} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full mt-8 float-right">
        Next
      </button>
      <Link
        href="/edit"
        className="flex items-center rounded-lg bg-green-500 py-4 px-8 text-lg font-semibold text-white transition-colors hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Create one
      </Link>
    </main>
  );
}
