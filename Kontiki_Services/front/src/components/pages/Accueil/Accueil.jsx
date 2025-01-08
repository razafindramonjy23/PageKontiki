import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bois from './img/bois.jpg';
import { motion } from 'framer-motion';
import equipe from './img/equipe.png';
import { Link } from 'react-router-dom';

const images = [
  {
    src: bois,
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden animate-fadeIn animation-delay-300">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-blue-900 bg-opacity-20">
              <h2 className="mb-4 text-4xl font-bold md:text-6xl animate-fadeInDown">
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
        <div className="container px-4 mx-auto">
          <div className="my-20 mb-20 font-sans text-center">
            <h2 className="text-4xl font-semibold text-blue-900">NOS SOLUTIONS</h2>
            <div className="flex justify-center mt-2">
              <div className="w-24 h-1 bg-yellow-400"></div>
            </div>
          </div>

          <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-start gap-8 lg:flex-row">
              {/* Navigation tabs */}
              <div className="flex w-full gap-4 overflow-x-auto lg:w-1/4 lg:flex-col lg:overflow-visible">
                {solutions.map((solution, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`whitespace-nowrap px-4 py-2 text-left transition-all ${currentSlide === index
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
                  <h2 className="mb-4 text-2xl font-bold">{solutions[currentSlide].title}</h2>
                  <p className="mb-8">{solutions[currentSlide].description}</p>

                  <div className="space-y-2">
                    {solutions[currentSlide].links.map((link, index) => (
                      <div
                        key={index}
                        className="py-2 transition-colors border-b cursor-pointer border-yellow-400/20 hover:text-yellow-400"
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute flex justify-between w-full -translate-y-1/2 pointer-events-none top-1/2">
              <button
                onClick={prevSlide}
                className="p-2 transition-colors bg-white rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-900" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 transition-colors bg-white rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reste du contenu... */}
      {/* About Section */}
      <section id="about" className="container px-4 py-16 mx-auto">
        <div className="my-20 mb-20 font-sans text-center">
          <h2 className="text-4xl font-semibold text-blue-900 animate-fadeIn animation-delay-300">
            A PROPOS DE NOUS
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-yellow-400"></div>
          </div>
        </div>
        <p className="max-w-5xl mx-auto leading-relaxed text-center text-blue-800">
          Spécialiste du marketing digital et du traitement des données massives
          (Bigdata). Située à Antsahavola, KONTIKI SERVICE compte aujourd'hui
          plus de 30 collaborateurs.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="my-20 mb-20 font-sans text-center">
            <h2 className="text-4xl font-semibold text-blue-900">SERVICES</h2>
            <div className="flex justify-center mt-2">
              <div className="w-24 h-1 bg-yellow-400"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">Génération de Leads</h3>
              <p className="text-blue-800">
                Collectez des prospects qualifiés et générez de nouveaux clients.              </p>
            </div>
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">Campagne Emailing</h3>
              <p className="text-blue-800">
                Gestion de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.
              </p>
            </div>
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">Qualification des Prospects</h3>
              <p className="text-blue-800">
                Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="py-16 bg-white sm:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <h2 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
                Rejoignez-nous
              </h2>
              <div className="w-20 h-2 mt-4 rounded-full bg-amber-400"></div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Embarquez dans une aventure professionnelle unique avec Kontiki Service.
                Nous recherchons des talents passionnés qui souhaitent faire partie d'une
                équipe dynamique et innovante.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-white transition-colors rounded-full bg-blue-950 hover:bg-blue-900"
                >
                  Postuler maintenant
                  <span className="ml-2 text-amber-400">→</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-xl">
                <img
                  src={equipe}
                  alt="Équipe Kontiki"
                  className="object-cover w-full h-full shadow-2xl rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent rounded-xl"></div>
              </div>
              <div className="absolute w-32 h-32 -bottom-6 -left-6 bg-amber-400 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div> */}
      <div className="py-16 bg-white sm:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <h2 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
                Rejoignez-nous
              </h2>
              <div className="w-20 h-2 mt-4 rounded-full bg-amber-400"></div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Embarquez dans une aventure professionnelle unique avec Kontiki Service.
                Nous recherchons des talents passionnés qui souhaitent faire partie d'une
                équipe dynamique et innovante.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-white transition-colors rounded-full bg-blue-950 hover:bg-blue-900"
                  >
                    Postuler maintenant
                    <span className="ml-2 text-amber-400">→</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-xl">
                <img
                  src={equipe}
                  alt="Équipe Kontiki"
                  className="object-cover w-full h-full shadow-2xl rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent rounded-xl"></div>
              </div>
              <div className="absolute w-32 h-32 -bottom-6 -left-6 bg-amber-400 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default HomePage;