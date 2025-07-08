"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params?.id as string;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!serviceId) return;
    fetch(`/api/admin/services/${serviceId}`)
      .then(res => res.json())
      .then(data => {
        if (data.service) {
          setName(data.service.name || "");
          setDescription(data.service.description || "");
          setPrice(data.service.price || 0);
          setImage(data.service.image || "");
          setPublished(!!data.service.published);
        }
        setLoaded(true);
      });
  }, [serviceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch(`/api/admin/services/${serviceId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, image, published }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/services");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update service");
    }
  };

  if (!loaded) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Service name"
            title="Service name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            rows={4}
            required
            placeholder="Service description"
            title="Service description"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            min={0}
            step={0.01}
            placeholder="Price"
            title="Price"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Image URL"
            title="Image URL"
          />
        </div>
        <div className="flex items-center">
          <input
            id="published"
            type="checkbox"
            checked={published}
            onChange={e => setPublished(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="published">Published</label>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
