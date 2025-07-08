"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditGalleryPage() {
  const router = useRouter();
  const params = useParams();
  const galleryId = params?.id as string;
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!galleryId) return;
    fetch(`/api/admin/gallery/${galleryId}`)
      .then(res => res.json())
      .then(data => {
        if (data.gallery) {
          setImage(data.gallery.image || "");
          setCaption(data.gallery.caption || "");
        }
        setLoaded(true);
      });
  }, [galleryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch(`/api/admin/gallery/${galleryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image, caption }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/gallery");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update image");
    }
  };

  if (!loaded) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Gallery Image</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Image URL"
            title="Image URL"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="caption">Caption</label>
          <input
            id="caption"
            type="text"
            value={caption}
            onChange={e => setCaption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Caption (optional)"
            title="Caption"
          />
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
