import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-emerald-900 py-3 sticky top-0 z-10">
        {/* Accessibility: Added descriptive alt text for the logo */}{" "}
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
      </header>
      {/* Accessibility: Use of semantic HTML elements for better screen reader interpretation */}
      <main role="main">
        {/* added main tag with role */}
        {children}
      </main>
    </>
  );
}

// Accessibility improvements:
// Enclosed the navigation bar within a header tag, semantically indicating that it's the header of the page.
// Added descriptive alt text for the logo image, crucial for users who rely on screen readers to understand the content of images.
// Added role="img" and aria-label to the Image component to ensure that the purpose of the image is clear and to provide a textual alternative to the visual information.
// Wrapped the children component in a main tag with role="main" to define the primary content of the document. This helps assistive technologies in identifying the main content area.
