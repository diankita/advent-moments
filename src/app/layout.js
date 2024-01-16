import {Inter} from 'next/font/google';
import '@/app/globals.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';


const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Advent moments',
  description: 'Sustainable option for advent calendars',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
