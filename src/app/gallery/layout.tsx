import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Braiding Gallery - BBS Hair Braiding | Our Work Portfolio",
  description: "View our stunning hair braiding gallery showcasing box braids, cornrows, twists, protective styles, and custom designs. See the quality and artistry of our work at BBS Hair Braiding.",
  keywords: "hair braiding gallery, braiding portfolio, box braids photos, cornrows gallery, twists styles, protective styles gallery, hair braiding examples",
  openGraph: {
    title: "Hair Braiding Gallery - BBS Hair Braiding | Our Work Portfolio",
    description: "View our stunning hair braiding gallery showcasing box braids, cornrows, twists, protective styles, and custom designs. See the quality and artistry of our work.",
    url: 'https://bbshairbraiding.vercel.app/gallery',
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
