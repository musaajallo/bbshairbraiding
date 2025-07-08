
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "./SignInForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default async function AdminLogin() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/admin");
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <main className="flex flex-1 items-center justify-center mt-16 md:mt-24">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-purple-200 dark:border-gray-700">
          <div className="flex flex-col items-center mb-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <circle cx="24" cy="24" r="24" fill="#9333ea" fillOpacity="0.15"/>
              <path d="M24 14a6 6 0 1 1 0 12a6 6 0 0 1 0-12zm0 16c-5.33 0-10 2.67-10 6v2h20v-2c0-3.33-4.67-6-10-6z" fill="#9333ea"/>
            </svg>
            <h1 className="text-3xl font-extrabold text-purple-700 dark:text-purple-400 mb-1 tracking-tight">Admin Login</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Sign in to access the admin dashboard</p>
          </div>
          <div className="mt-8 w-full">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
