import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Services() {
  const services = [
    {
      name: "Box Braids",
      price: "$80 - $150",
      duration: "3-5 hours",
      description: "Classic protective style with individual square-shaped sections. Perfect for length retention and versatility.",
      features: ["Long-lasting", "Low maintenance", "Various sizes available", "Protective styling"]
    },
    {
      name: "Cornrows",
      price: "$60 - $120",
      duration: "2-3 hours",
      description: "Traditional braiding technique creating continuous raised rows. Great for active lifestyles.",
      features: ["Athletic-friendly", "Neat and professional", "Custom patterns", "Quick service"]
    },
    {
      name: "Twists",
      price: "$70 - $130",
      duration: "2-4 hours",
      description: "Two-strand twists for a natural, textured look. Gentle on hair and easy to maintain.",
      features: ["Natural look", "Hair-friendly", "Versatile styling", "Quick installation"]
    },
    {
      name: "French Braids",
      price: "$50 - $90",
      duration: "1-2 hours",
      description: "Elegant braiding technique perfect for special occasions or everyday wear.",
      features: ["Classic style", "Professional look", "Quick service", "Event-ready"]
    },
    {
      name: "Goddess Braids",
      price: "$90 - $160",
      duration: "3-4 hours",
      description: "Large, dramatic braids that make a statement. Perfect for those who want bold, beautiful styles.",
      features: ["Statement style", "Low maintenance", "Elegant appearance", "Long-lasting"]
    },
    {
      name: "Feed-in Braids",
      price: "$85 - $140",
      duration: "3-4 hours",
      description: "Seamless braiding technique that creates a natural hairline appearance.",
      features: ["Natural look", "Comfortable fit", "Trendy style", "Scalp-friendly"]
    },
    {
      name: "Lemonade Braids",
      price: "$95 - $155",
      duration: "4-5 hours",
      description: "Side-swept braiding style inspired by Beyoncé. Trendy and fashionable.",
      features: ["Trendy design", "Celebrity-inspired", "Unique pattern", "Instagram-ready"]
    },
    {
      name: "Custom Designs",
      price: "$100+",
      duration: "Varies",
      description: "Personalized braiding designs created specifically for you. Bring your vision to life.",
      features: ["Unique to you", "Creative expression", "Artistic designs", "Personal consultation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />

      {/* Services Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert hair braiding services tailored to your style and needs. 
            All services include consultation and styling tips for maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Consultation</h3>
              <p className="text-gray-600 text-sm">We discuss your hair goals, lifestyle, and preferred style</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Preparation</h3>
              <p className="text-gray-600 text-sm">Hair washing, conditioning, and sectioning for optimal results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Braiding</h3>
              <p className="text-gray-600 text-sm">Expert braiding using professional techniques and quality products</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Finishing</h3>
              <p className="text-gray-600 text-sm">Final styling and maintenance tips for long-lasting results</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">How long do braids typically last?</h3>
              <p className="text-gray-600 mb-4">Most protective styles last 4-8 weeks depending on hair type, maintenance, and style choice.</p>
              
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Do I need to bring my own hair extensions?</h3>
              <p className="text-gray-600 mb-4">You can bring your own or we can provide high-quality extensions for an additional cost.</p>
              
              <h3 className="text-lg font-semibold mb-2 text-purple-600">How should I prepare my hair?</h3>
              <p className="text-gray-600 mb-4">Come with clean, detangled hair. We recommend washing 1-2 days before your appointment.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Can I wash my hair with braids?</h3>
              <p className="text-gray-600 mb-4">Yes! We&apos;ll show you proper washing techniques to maintain your braids and scalp health.</p>
              
              <h3 className="text-lg font-semibold mb-2 text-purple-600">What if I need to cancel my appointment?</h3>
              <p className="text-gray-600 mb-4">We require 48-hour notice for cancellations to avoid a cancellation fee.</p>
              
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Do you offer touch-up services?</h3>
              <p className="text-gray-600 mb-4">Yes, we offer maintenance services to refresh edges and fix any loose braids.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Book your appointment today and let us create the perfect braided style for you!</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/booking"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
