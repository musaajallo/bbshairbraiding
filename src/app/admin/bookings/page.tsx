import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string | Date;
  // add other fields if needed
};

export default async function AdminBookingsPage() {
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

  const bookings: Booking[] = await prisma.booking.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id} className="text-center">
              <td className="p-2 border">{booking.name}</td>
              <td className="p-2 border">{booking.email}</td>
              <td className="p-2 border">{booking.phone}</td>
              <td className="p-2 border">{booking.service}</td>
              <td className="p-2 border">{new Date(booking.date).toLocaleString()}</td>
              <td className="p-2 border">
                <Link href={`/admin/bookings/${booking.id}/edit`} className="text-purple-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
