import Link from 'next/link';
import Image from 'next/image';
import OnboardingStepper from '@/app/components/onboarding-stepper';

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
      <h1 className="text-lg text-center text-white">
        <p className="mb-2 font-semibold text-xl">
          Personalize your calendar 👩‍🎨
        </p>
        Choose a title, add your messages & pictures and share with your loved
        one
      </h1>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
        >
          Back
        </Link>
        <OnboardingStepper currentPage={currentPage} />
        <Link
          href="/edit"
          className="rounded-lg bg-none py-1 px-2 text-lg text-white transition-colors hover:outline-green-400 focus-visible:outline-green-600"
        >
          Start
        </Link>
      </div>
    </main>
  );
}
