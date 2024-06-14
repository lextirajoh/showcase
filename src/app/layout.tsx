import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | lex tirajoh',
    default: 'lex tirajoh',
  },
  description: 'web development work showcase',
  metadataBase: new URL('https://lextirajoh.vercel.app'),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'lex tirajoh',
    description: 'web development work showcas',
    url: 'https://lextirajoh.vercel.app',
    siteName: 'lex tirajoh',
    locale: 'en_US',
    type: 'website',
  },
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
