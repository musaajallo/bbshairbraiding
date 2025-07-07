"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BBS Hair Braiding</h1>
          <p className="text-xl md:text-2xl">Celebrating beauty through the art of hair braiding</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Company History */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  BBS Hair Braiding was founded in 2013 with a simple yet powerful mission: to celebrate the beauty and cultural significance of African hair braiding while providing exceptional service to our community.
                </p>
                <p>
                  What started as a small home-based business has grown into one of the most trusted braiding salons in the area. Over the past decade, we&apos;ve had the privilege of serving thousands of clients, each with their unique style and vision.
                </p>
                <p>
                  Our commitment to excellence, combined with our passion for the artistry of braiding, has earned us a reputation for quality work that not only looks beautiful but also promotes healthy hair growth through protective styling.
                </p>
                <p>
                  Today, BBS Hair Braiding continues to honor traditional braiding techniques while embracing modern styles and trends, ensuring our clients always leave feeling confident and beautiful.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">12+ Years</h3>
                <p className="text-gray-600 mb-6">Of dedicated service to our community</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">15+</div>
                    <div className="text-sm text-gray-600">Braid Styles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Profile */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl font-bold">BS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Beatrice Simmons</h3>
                  <p className="text-purple-600 font-semibold">Founder & Master Braider</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Beatrice Simmons is the heart and soul behind BBS Hair Braiding. With over 15 years of experience in the art of hair braiding, Beatrice has dedicated her life to mastering traditional African braiding techniques while innovating with contemporary styles.
                  </p>
                  <p>
                    Born and raised in Ghana, Beatrice learned the fundamentals of braiding from her grandmother, who passed down generations of knowledge and cultural traditions. After moving to the United States, she recognized the need for authentic, high-quality braiding services in her community.
                  </p>
                  <p>
                    Beatrice holds certifications in cosmetology and natural hair care, and she regularly attends workshops to stay current with the latest techniques and trends. Her expertise spans from intricate cornrow patterns to elaborate protective styles.
                  </p>
                  <p>
                    When she&apos;s not creating beautiful hairstyles, Beatrice enjoys mentoring young women interested in the beauty industry and volunteers at local community centers, teaching basic hair care and braiding techniques.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-xl font-bold text-pink-600">Certified</div>
                    <div className="text-sm text-gray-600">Cosmetologist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality & Excellence</h3>
              <p className="text-gray-600">We are committed to delivering the highest quality braiding services, using premium products and proven techniques that ensure lasting, beautiful results.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cultural Heritage</h3>
              <p className="text-gray-600">We honor and celebrate the rich cultural traditions of African hair braiding while making these beautiful styles accessible to everyone.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hair Health</h3>
              <p className="text-gray-600">Our protective styling techniques promote healthy hair growth while keeping your natural hair safe from damage and environmental stress.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Experience the BBS Difference</h2>
          <p className="text-xl mb-8">Join our family of satisfied clients and discover why we&apos;re the trusted choice for beautiful braiding.</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/booking"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
