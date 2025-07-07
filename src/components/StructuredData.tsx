export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "BBS Hair Braiding",
    "description": "Professional hair braiding services specializing in protective styles, box braids, cornrows, and custom designs. Expert care for natural hair.",
    "url": "https://bbshairbraiding.vercel.app",
    "telephone": "+15551234567",
    "email": "info@bbshairbraiding.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Beauty Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 08:00-18:00", 
      "Su 10:00-16:00"
    ],
    "priceRange": "$50-$200",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "founder": {
      "@type": "Person",
      "name": "Beatrice Simmons",
      "jobTitle": "Master Braider & Owner"
    },
    "serviceArea": {
      "@type": "City",
      "name": "City, State"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hair Braiding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Box Braids",
            "description": "Classic protective style with individual square-shaped sections"
          },
          "price": "80-150",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cornrows",
            "description": "Traditional braiding technique creating continuous raised rows"
          },
          "price": "60-120",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Twists",
            "description": "Two-strand twists for a natural, textured look"
          },
          "price": "70-130",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "The best braiding experience I've ever had! My box braids lasted 8 weeks and looked amazing the entire time."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
