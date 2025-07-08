import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";


interface SessionUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

type SessionWithRole = {
  user?: SessionUser;
  expires?: string;
};

export default async function AdminPage() {
  const session = (await getServerSession(authOptions)) as SessionWithRole;
  if (!session || session.user?.role !== "admin") {
    return (
      <AdminLayout>
        <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>You must be an admin to view this page.</p>
          <Link href="/admin/login" className="text-purple-600 hover:underline mt-4 block">Sign In</Link>
        </div>
      </AdminLayout>
    );
  }
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <ul className="space-y-4">
          <li><Link href="/admin/users" className="text-lg text-purple-600 hover:underline">User Management</Link></li>
          <li><Link href="/admin/pages" className="text-lg text-purple-600 hover:underline">Pages</Link></li>
          <li><Link href="/admin/services" className="text-lg text-purple-600 hover:underline">Services</Link></li>
          <li><Link href="/admin/gallery" className="text-lg text-purple-600 hover:underline">Gallery</Link></li>
          <li><Link href="/admin/bookings" className="text-lg text-purple-600 hover:underline">Bookings</Link></li>
          <li><Link href="/admin/contact" className="text-lg text-purple-600 hover:underline">Contact Info</Link></li>
        </ul>
      </div>
    </AdminLayout>
  );
}
