import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-emerald-900 py-3 sticky top-0 z-10">
        <Image
          src="/logo-header1.png"
          alt="Advent moments logo"
          width={300}
          height={100}
          role="img" // added role
          aria-label="Advent moments logo" // added aria-label
        />
      </div>
      <main role="main">
        {/* added main tag with role */}
        {children}
      </main>
    </>
  );
}

// Accessibility added:
// - alt attribute to images
// - role="img" to decorative images
// - aria-label to decorative images
// - role="main" to main tag
