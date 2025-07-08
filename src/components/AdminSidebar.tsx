import * as React from "react";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col p-6 min-h-0 max-h-full">
      <nav className="flex flex-col gap-4">
        <Link href="/admin" className="font-semibold text-purple-700 dark:text-purple-400 hover:underline">Dashboard</Link>
        <Link href="/admin/users" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Users</Link>
        <Link href="/admin/pages" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Pages</Link>
        <Link href="/admin/services" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Services</Link>
        <Link href="/admin/gallery" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Gallery</Link>
        <Link href="/admin/bookings" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Bookings</Link>
        <Link href="/admin/contact" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Contact</Link>
      </nav>
    </aside>
  );
}
