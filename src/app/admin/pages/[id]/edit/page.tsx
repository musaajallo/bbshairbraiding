"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const pageId = params?.id as string;
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pageId) return;
    fetch(`/api/admin/pages/${pageId}`)
      .then(res => res.json())
      .then(data => {
        if (data.page) {
          setTitle(data.page.title || "");
          setSlug(data.page.slug || "");
          setContent(data.page.content || "");
          setPublished(!!data.page.published);
        }
        setLoaded(true);
      });
  }, [pageId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch(`/api/admin/pages/${pageId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, content, published }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/pages");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update page");
    }
  };

  if (!loaded) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="Page title"
            title="Page title"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="slug">Slug</label>
          <input
            id="slug"
            type="text"
            value={slug}
            onChange={e => setSlug(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            required
            placeholder="page-slug"
            title="Page slug"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            rows={6}
            required
            placeholder="Page content"
            title="Page content"
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
