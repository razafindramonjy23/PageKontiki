import React from 'react';

// Common PageBanner component
const PageBanner = ({ title }) => (
  <div className="relative h-96">
    <div className="absolute inset-0">
      <img
        src="/api/placeholder/1920/400"
        alt="Dark background"
        className="object-cover w-full h-full brightness-50"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <div className="relative flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
        {title}
      </h1>

      <div className="flex justify-center mt-4">
        <div className="w-32 h-2 rounded-full bg-amber-400 animate-scale-in" />
      </div>
    </div>
  </div>
);

// Simple Carousel Component
const SimpleCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-cover w-full h-64"
      />
      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/50"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/50"
      >
        →
      </button>
    </div>
  );
};

// Traffic Manager Page
const TrafficManagerPage = () => {
  const carouselImages = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="Traffic Manager" />
      
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Role Overview</h2>
            <p className="text-gray-600">
              Traffic Managers at Kontiki Services are responsible for optimizing email campaign performance, analyzing metrics, and ensuring efficient delivery of marketing communications.
            </p>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-400">→</span>
                  <span>Campaign optimization and performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-400">→</span>
                  <span>Traffic analysis and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-400">→</span>
                  <span>Strategy development and implementation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <SimpleCarousel images={carouselImages} />

            <div className="overflow-hidden bg-gray-200 rounded-lg aspect-video">
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                Video Player Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};