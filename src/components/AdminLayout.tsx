import React from "react";
import Navigation from "@/components/Navigation";
import AdminSidebar from "@/components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <div className="flex flex-1 min-h-0">
        <AdminSidebar />
        <main className="flex-1 p-6 md:p-10 lg:p-12 xl:p-16 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
