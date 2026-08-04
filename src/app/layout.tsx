import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'HTH INDIA – Hack The Hardware India',
  description: 'National Level Hardware Hackathon. Engineering the future of Indian hardware innovation.',
  openGraph: {
    title: 'HTH INDIA – Hack The Hardware',
    description: 'The premier 24-hour national hardware hackathon.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTH INDIA – Hack The Hardware',
    description: 'National Level Hardware Engineering Spectacle.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
