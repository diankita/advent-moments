import Link from 'next/link';

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <Link
        href="/edit"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Create
      </Link>
    </main>
  );
}
