
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role?: {
    name: string;
  };
}

export default async function AdminUsersPage() {
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

  const users = await prisma.user.findMany({
    include: { role: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role?.name}</td>
              <td className="p-2 border">
                <Link href={`/admin/users/${user.id}`} className="text-purple-600 hover:underline mr-2">Edit</Link>
                {/* Add delete button here if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/admin/users/create">
        <Button className="mt-6">Add User</Button>
      </Link>
    </div>
  );
}
