"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Placeholder for gallery images - in a real app, these would come from a database or CMS
  const galleryItems = [
    {
      id: 1,
      title: "Box Braids - Medium Size",
      category: "Box Braids",
      description: "Classic medium-sized box braids with natural hair extensions"
    },
    {
      id: 2,
      title: "Intricate Cornrow Design",
      category: "Cornrows",
      description: "Beautiful geometric cornrow pattern with curves"
    },
    {
      id: 3,
      title: "Goddess Braids with Curls",
      category: "Goddess Braids",
      description: "Large goddess braids with curly ends"
    },
    {
      id: 4,
      title: "Feed-in Braids",
      category: "Feed-in Braids",
      description: "Natural-looking feed-in braids with ombre color"
    },
    {
      id: 5,
      title: "Lemonade Braids",
      category: "Lemonade Braids",
      description: "Side-swept lemonade braids inspired by Beyoncé"
    },
    {
      id: 6,
      title: "Senegalese Twists",
      category: "Twists",
      description: "Long Senegalese twists with blonde highlights"
    },
    {
      id: 7,
      title: "Crown Braid",
      category: "French Braids",
      description: "Elegant crown braid perfect for special occasions"
    },
    {
      id: 8,
      title: "Tribal Braids",
      category: "Custom Design",
      description: "Unique tribal-inspired braiding pattern"
    },
    {
      id: 9,
      title: "Fulani Braids",
      category: "Custom Design",
      description: "Traditional Fulani braids with beads and accessories"
    }
  ];

  const categories = ["All", "Box Braids", "Cornrows", "Goddess Braids", "Feed-in Braids", "Lemonade Braids", "Twists", "French Braids", "Custom Design"];

  // Filter items based on active category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />

      {/* Gallery Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of beautiful braiding work. Get inspired for your next hairstyle!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors border ${
                activeCategory === category
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-600 border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Placeholder for image */}
              <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-purple-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-purple-400 font-medium">{item.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
          <p className="text-xl text-gray-600 mb-6">
            See our latest work and hair inspiration on Instagram @bbshairbraiding
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Follow on Instagram
            </a>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Share Your Look
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;Amazing work! My box braids lasted 6 weeks and looked perfect the entire time.&quot;</p>
                <p className="font-semibold text-gray-900 mt-2">- Sarah M.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;Professional service and beautiful results. The custom design exceeded my expectations!&quot;</p>
                <p className="font-semibold text-gray-900 mt-2">- Maya T.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;Clean salon, friendly staff, and incredible braiding skills. Highly recommend!&quot;</p>
                <p className="font-semibold text-gray-900 mt-2">- Keisha J.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Next Look?</h2>
          <p className="text-xl text-gray-600 mb-8">Book your appointment and let&apos;s create something beautiful together!</p>
          <Link
            href="/booking"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Book Your Appointment
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
