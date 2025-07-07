import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - BBS Hair Braiding | Our Story & Experience",
  description: "Learn about BBS Hair Braiding's 10+ years of experience, meet owner Beatrice Simmons, and discover our commitment to healthy hair care and exceptional service.",
  keywords: "about BBS Hair Braiding, Beatrice Simmons, hair braiding experience, professional hair stylist, hair salon history",
  openGraph: {
    title: "About Us - BBS Hair Braiding | Our Story & Experience",
    description: "Learn about BBS Hair Braiding's 10+ years of experience, meet owner Beatrice Simmons, and discover our commitment to healthy hair care and exceptional service.",
    url: 'https://bbshairbraiding.vercel.app/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
