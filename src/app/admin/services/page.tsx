import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminServicesPage() {
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

  // Define the type for a service (you can import from @prisma/client if available)
  type Service = {
    id: string;
    name: string;
    price: number;
    published: boolean;
    createdAt: Date;
    // add other fields if needed
  };

  const services: Service[] = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Published</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service: Service) => (
            <tr key={service.id} className="text-center">
              <td className="p-2 border">{service.name}</td>
              <td className="p-2 border">${service.price.toFixed(2)}</td>
              <td className="p-2 border">{service.published ? "Yes" : "No"}</td>
              <td className="p-2 border">
                <Link href={`/admin/services/${service.id}/edit`} className="text-purple-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/admin/services/create" className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Service</Link>
    </div>
  );
}
