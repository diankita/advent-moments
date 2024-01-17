import Image from 'next/image';

export default function Layout({children}) {
  return (
    <>
      <div className="bg-emerald-900 py-3 sticky top-0 z-10">
        <Image
          src="/logo-header1.png"
          alt="Advent moments logo"
          width={300}
          height={100}
        />
      </div>
      {children}
    </>
  );
}
