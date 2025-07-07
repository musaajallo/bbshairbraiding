import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment - BBS Hair Braiding | Online Booking Available",
  description: "Book your hair braiding appointment online at BBS Hair Braiding. Choose from our wide range of services and secure your preferred time slot. Easy and convenient booking.",
  keywords: "book hair braiding appointment, online booking, hair braiding salon, schedule appointment, hair braiding services",
  openGraph: {
    title: "Book Appointment - BBS Hair Braiding | Online Booking Available",
    description: "Book your hair braiding appointment online at BBS Hair Braiding. Choose from our wide range of services and secure your preferred time slot.",
    url: 'https://bbshairbraiding.vercel.app/booking',
  },
  alternates: {
    canonical: '/booking',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
