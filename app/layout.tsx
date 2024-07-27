import { PropsWithChildren } from 'react';
import { Inter as FontSans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Collabro',
  description: 'Your go-to collaborative editor',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen font-sans antialiased',
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
