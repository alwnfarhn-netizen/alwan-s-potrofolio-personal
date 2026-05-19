import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, VT323 } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

import { seo, identity } from '@/data/content';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: identity.name || 'Alwan' }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    images: seo.ogImage ? [{ url: seo.ogImage }] : [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${vt323.variable}`}>
      <body className="antialiased min-h-screen font-space bg-matte-black text-warm-white">
        {children}
        <GoogleAnalytics gaId="G-X4VJJY9D0Y" />
      </body>
    </html>
  );
}
