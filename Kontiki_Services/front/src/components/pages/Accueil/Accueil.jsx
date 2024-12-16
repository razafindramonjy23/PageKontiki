import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://via.placeholder.com/1920x1080",
    title: "Slide 1",
    subtitle: "Bienvenue chez KONTIKI",
  },
  {
    src: "https://via.placeholder.com/1920x1080",
    title: "Slide 2",
    subtitle: "We Make Things Possible",
  },
  {
    src: "https://via.placeholder.com/1920x1080",
    title: "Slide 3",
    subtitle: "Join Our Journey",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden animate-fadeIn animation-delay-300">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                {image.title}
              </h2>
              <p className="text-lg md:text-2xl animate-fadeInUp">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="my-20 mb-20 font-sans text-center">
          <h2 className="text-4xl font-semibold animate-fadeIn animation-delay-300">
            A PROPOS DE NOUS
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-amber-500"></div>
          </div>
        </div>
        <p className="text-center text-gray-600 leading-relaxed max-w-5xl mx-auto">
          Spécialiste du marketing digital et du traitement des données massives
          (Bigdata). Située à Antsahavola, KONTIKI SERVICE compte aujourd’hui
          plus de 30 collaborateurs..
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="my-20 mb-20 font-sans text-center">
            <h2 className="text-4xl font-semibold ">SERVICES</h2>
            <div className="flex justify-center mt-2">
              <div className="w-24 h-1 bg-amber-500"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-600">
                Tailored strategies to meet your business goals.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                Building robust software solutions for your needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-600">
                24/7 support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
