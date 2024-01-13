import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-14 bg-emerald-900">
      <Image
        src="/logo-onboarding.png"
        alt="app-logo"
        width={500}
        height={620}
      />
      <h1 className="text-xl text-center text-green-50">
        Advent calendars are awesome
        <br />
        (and more sustainable 🌱)
      </h1>
      <Link
        href="/edit"
        className="flex h-10 items-center rounded-lg bg-green-500 px-6 text-sm font-medium text-white transition-colors hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Create one
      </Link>
    </main>
  );
}
