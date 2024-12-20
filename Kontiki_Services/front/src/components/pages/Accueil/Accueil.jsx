import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "/api/placeholder/1920/1080",
    title: "Slide 1",
    subtitle: "Bienvenue chez KONTIKI",
  },
  {
    src: "/api/placeholder/1920/1080",
    title: "Slide 2",
    subtitle: "We Make Things Possible",
  },
  {
    src: "/api/placeholder/1920/1080",
    title: "Slide 3",
    subtitle: "Join Our Journey",
  },
];

const solutions = [
  {
    title: "SOLUTIONS DIGITALES",
    description: "Nous élaborons des solutions digitales innovantes adaptées à vos besoins spécifiques. Notre expertise en marketing digital vous permet d'atteindre vos objectifs commerciaux.",
    links: [
      "Marketing Digital",
      "Développement Web",
      "Solutions E-commerce"
    ]
  },
  {
    title: "SERVICES DATA",
    description: "Spécialistes du traitement des données massives (BigData), nous vous aidons à exploiter pleinement vos données pour prendre des décisions éclairées.",
    links: [
      "Analyse de données",
      "Business Intelligence",
      "Data Mining"
    ]
  },
  {
    title: "CONSULTING",
    description: "Notre équipe de consultants vous accompagne dans votre transformation digitale avec des solutions sur mesure pour votre entreprise.",
    links: [
      "Stratégie Digitale",
      "Accompagnement Projet",
      "Formation"
    ]
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
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
            <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex flex-col justify-center items-center text-white">
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

      {/* Solution Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="my-20 mb-20 font-sans text-center">
            <h2 className="text-4xl font-semibold text-blue-900">NOS SOLUTIONS</h2>
            <div className="flex justify-center mt-2">
              <div className="w-24 h-1 bg-yellow-400"></div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Navigation tabs */}
              <div className="w-full lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                {solutions.map((solution, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`whitespace-nowrap px-4 py-2 text-left transition-all ${
                      currentSlide === index
                        ? 'border-b-2 lg:border-b-0 lg:border-l-2 border-yellow-400 text-blue-900 font-semibold'
                        : 'text-blue-800 hover:text-yellow-400'
                    }`}
                  >
                    {solution.title}
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div className="w-full lg:w-3/4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white min-h-[400px]">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold mb-4">{solutions[currentSlide].title}</h2>
                  <p className="mb-8">{solutions[currentSlide].description}</p>
                  
                  <div className="space-y-2">
                    {solutions[currentSlide].links.map((link, index) => (
                      <div
                        key={index}
                        className="border-b border-yellow-400/20 py-2 hover:text-yellow-400 cursor-pointer transition-colors"
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
              <button
                onClick={prevSlide}
                className="p-2 bg-white rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-blue-900" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-blue-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reste du contenu... */}
      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="my-20 mb-20 font-sans text-center">
          <h2 className="text-4xl font-semibold text-blue-900 animate-fadeIn animation-delay-300">
            A PROPOS DE NOUS
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-yellow-400"></div>
          </div>
        </div>
        <p className="text-center text-blue-800 leading-relaxed max-w-5xl mx-auto">
          Spécialiste du marketing digital et du traitement des données massives
          (Bigdata). Située à Antsahavola, KONTIKI SERVICE compte aujourd'hui
          plus de 30 collaborateurs.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="my-20 mb-20 font-sans text-center">
            <h2 className="text-4xl font-semibold text-blue-900">SERVICES</h2>
            <div className="flex justify-center mt-2">
              <div className="w-24 h-1 bg-yellow-400"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Consulting</h3>
              <p className="text-blue-800">
                Tailored strategies to meet your business goals.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Development</h3>
              <p className="text-blue-800">
                Building robust software solutions for your needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Support</h3>
              <p className="text-blue-800">
                24/7 support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-yellow-400"></div>
          </div>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-blue-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;