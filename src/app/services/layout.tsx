import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Braiding Services - BBS Hair Braiding | Protective Styles & More",
  description: "Explore our comprehensive hair braiding services including box braids, cornrows, twists, protective styles, and custom designs. Professional, affordable, and healthy hair care.",
  keywords: "hair braiding services, box braids, cornrows, twists, protective styles, African hair braiding, natural hair, hair extensions",
  openGraph: {
    title: "Hair Braiding Services - BBS Hair Braiding | Protective Styles & More",
    description: "Explore our comprehensive hair braiding services including box braids, cornrows, twists, protective styles, and custom designs. Professional, affordable, and healthy hair care.",
    url: 'https://bbshairbraiding.vercel.app/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
