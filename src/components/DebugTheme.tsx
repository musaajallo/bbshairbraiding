"use client";

import { useEffect, useState } from "react";

export default function DebugTheme() {
  const [htmlClasses, setHtmlClasses] = useState("");

  useEffect(() => {
    const updateClasses = () => {
      setHtmlClasses(document.documentElement.className || "no classes");
    };

    updateClasses();
    
    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(updateClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
      HTML classes: {htmlClasses}
    </div>
  );
}
