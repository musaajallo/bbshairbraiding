"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateContactPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone, address, mapUrl }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/contact");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to add contact");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Contact Info</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Email address"
            title="Email address"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Phone number"
            title="Phone number"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Address"
            title="Address"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="mapUrl">Map URL</label>
          <input
            id="mapUrl"
            type="text"
            value={mapUrl}
            onChange={e => setMapUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Google Maps URL (optional)"
            title="Map URL"
          />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Contact"}
        </button>
      </form>
    </div>
  );
}
