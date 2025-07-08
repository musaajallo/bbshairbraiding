import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

type GalleryItem = {
  id: string;
  image: string;
  caption?: string | null;
  createdAt: Date;
};

export default async function AdminGalleryPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "admin") {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You must be an admin to view this page.</p>
        <Link href="/admin/login" className="text-purple-600 hover:underline mt-4 block">Sign In</Link>
      </div>
    );
  }

  const gallery: GalleryItem[] = await prisma.gallery.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-center">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Caption</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map((item: GalleryItem) => (
            <tr key={item.id} className="text-center">
              <td className="p-2 border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.caption || "Gallery image"} className="h-16 mx-auto" />
              </td>
              <td className="p-2 border">{item.caption}</td>
              <td className="p-2 border">
                <Link href={`/admin/gallery/${item.id}/edit`} className="text-purple-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/admin/gallery/create" className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Image</Link>
    </div>
  );
}
