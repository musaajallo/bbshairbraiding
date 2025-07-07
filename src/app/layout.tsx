import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "../components/WhatsAppFloat";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BBS Hair Braiding - Professional Hair Braiding Services",
  description: "Expert hair braiding services with over 10 years of experience. Specializing in protective styles, creative designs, and healthy hair care. Book your appointment today!",
  keywords: "hair braiding, protective styles, African hair braiding, hair salon, hair care, braids, natural hair",
  authors: [{ name: "BBS Hair Braiding" }],
  creator: "BBS Hair Braiding",
  publisher: "BBS Hair Braiding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bbshairbraiding.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BBS Hair Braiding - Professional Hair Braiding Services",
    description: "Expert hair braiding services with over 10 years of experience. Specializing in protective styles, creative designs, and healthy hair care.",
    url: 'https://bbshairbraiding.vercel.app',
    siteName: 'BBS Hair Braiding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BBS Hair Braiding - Professional Hair Braiding Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BBS Hair Braiding - Professional Hair Braiding Services",
    description: "Expert hair braiding services with over 10 years of experience. Specializing in protective styles, creative designs, and healthy hair care.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
