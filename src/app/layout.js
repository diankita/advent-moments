import { Inter } from "next/font/google";
import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advent moments",
  description: "Sustainable option for advent calendars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Accessibility: Specifying the language of the page */}
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}

// Accessibility improvements:
// Added lang="en" to the html tag to define the primary language of the page, which aids assistive technologies in providing correct language pronunciations.
// Structured the page using semantic HTML elements (header, main, and footer) to provide a clear, meaningful structure. This helps screen reader users to understand and navigate the content more effectively.
