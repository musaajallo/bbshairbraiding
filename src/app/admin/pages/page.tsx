import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Page = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: Date;
};

export default async function AdminPagesPage() {
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

  const pages: Page[] = await prisma.page.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Pages</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Slug</th>
            <th className="p-2 border">Published</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map(page => (
            <tr key={page.id} className="text-center">
              <td className="p-2 border">{page.title}</td>
              <td className="p-2 border">{page.slug}</td>
              <td className="p-2 border">{page.published ? "Yes" : "No"}</td>
              <td className="p-2 border">
                <Link href={`/admin/pages/${page.id}/edit`} className="text-purple-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/admin/pages/create" className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Page</Link>
    </div>
  );
}
