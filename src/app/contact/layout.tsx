import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - BBS Hair Braiding | Get in Touch Today",
  description: "Contact BBS Hair Braiding for questions, consultations, or to schedule an appointment. We're here to help with all your hair braiding needs. Call, email, or visit us today.",
  keywords: "contact BBS Hair Braiding, hair braiding consultation, salon contact, hair braiding questions, appointment scheduling",
  openGraph: {
    title: "Contact Us - BBS Hair Braiding | Get in Touch Today",
    description: "Contact BBS Hair Braiding for questions, consultations, or to schedule an appointment. We're here to help with all your hair braiding needs.",
    url: 'https://bbshairbraiding.vercel.app/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
