import Link from 'next/link';
import Image from 'next/image';
import OnboardingStepper from '@/app/components/onboarding-stepper';

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
      <h1 className="text-xl text-center text-white">
        <p className="mb-2 font-semibold">
          Online advent calendars are awesome!
        </p>
        And more sustainable 🌱
      </h1>
      <div className="flex justify-between items-center">
        <button className="opacity-0 rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400    focus-visible:outline-green-600">
          Next
        </button>
        <OnboardingStepper currentPage={currentPage} />
        <Link
          href="/onboarding"
          className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
        >
          Next
        </Link>
      </div>
    </main>
  );
}
