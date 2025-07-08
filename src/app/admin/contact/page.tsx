import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Contact = {
  id: string;
  email: string;
  phone: string;
  address: string;
  mapUrl?: string | null;
  createdAt: Date;
  // Add other fields if needed
};

export default async function AdminContactPage() {
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

  const contacts: Contact[] = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Contact Info</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Map</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} className="text-center">
              <td className="p-2 border">{contact.email}</td>
              <td className="p-2 border">{contact.phone}</td>
              <td className="p-2 border">{contact.address}</td>
              <td className="p-2 border">
                {contact.mapUrl && (
                  <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Map</a>
                )}
              </td>
              <td className="p-2 border">
                <Link href={`/admin/contact/${contact.id}/edit`} className="text-purple-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/admin/contact/create" className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Contact</Link>
    </div>
  );
}
