import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bois from './img/bois.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import equipe from './img/equipe.png';
import { Link } from 'react-router-dom';

import service from '../../../assets/Images/pages/accueil/service.jpg'

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
    title: "Solution Digitale",
    description: "Transformez votre présence en ligne avec nos solutions digitales innovantes. Nous créons des expériences numériques qui captivent votre audience et stimulent la croissance.",
    image: "/api/placeholder/600/400",
    links: [
      "Développement d'applications web sur mesure",
      "Optimisation des performances digitales",
      "Intégration de solutions e-commerce"
    ]
  },
  {
    title: "Marketing Digital",
    description: "Maximisez votre impact digital avec nos stratégies marketing ciblées. Notre approche data-driven assure des résultats mesurables et durables.",
    image: "/api/placeholder/600/400",
    links: [
      "Stratégie de contenu personnalisée",
      "Campagnes publicitaires ciblées",
      "Analyse et reporting détaillé"
    ]
  },
  {
    title: "Automatisation",
    description: "Optimisez vos processus avec nos solutions d'automatisation intelligentes. Gagnez en efficacité et réduisez les tâches répétitives.",
    image: "/api/placeholder/600/400",
    links: [
      "Automatisation des workflows",
      "Intégration CRM",
      "Solutions de reporting automatisé"
    ]
  }
];

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % solutions.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
};

const services = [
  {
    title: "Génération de Leads",
    description: "Collectez des prospects qualifiés et générez de nouveaux clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Campagne Emailing",
    description: "Gestion de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Qualification des Prospects",
    description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
]

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
      <section className="py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text"
            >
              NOS SOLUTIONS
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mt-4"
            >
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Navigation tabs */}
              <div className="flex w-full gap-4 overflow-x-auto lg:flex-col lg:w-1/4 lg:overflow-visible">
                {solutions.map((solution, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`
                    whitespace-nowrap px-6 py-4 text-left transition-all rounded-lg
                    ${currentSlide === index
                        ? 'bg-blue-900 text-white shadow-lg'
                        : 'text-blue-900 hover:bg-blue-50'
                      }
                  `}
                  >
                    {solution.title}
                  </motion.button>
                ))}
              </div>

              {/* Content carousel */}
              <div className="w-full lg:w-3/4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="p-8 text-white lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-bold">{solutions[currentSlide].title}</h3>
                        <p className="mb-6 text-blue-50">{solutions[currentSlide].description}</p>
                        <div className="space-y-3">
                          {solutions[currentSlide].links.map((link, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 py-2 transition-colors border-b cursor-pointer border-yellow-400/20 hover:text-yellow-400"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              {link}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative lg:w-1/2">
                        <img
                          src={solutions[currentSlide].image}
                          alt={solutions[currentSlide].title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute flex justify-between w-full px-4 pointer-events-none -translate-y-2/2 top-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="flex items-center justify-center w-12 h-12 transition-colors bg-transparent rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-900" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 transition-colors bg-transparent rounded-full shadow-lg pointer-events-auto hover:bg-yellow-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-900" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 w-64 h-64 transform translate-x-1/2 bg-yellow-100 rounded-full top-20 blur-3xl opacity-30"></div>
          <div className="absolute left-0 transform -translate-x-1/2 bg-blue-100 rounded-full bottom-20 w-96 h-96 blur-3xl opacity-30"></div>
        </div>

        <div className="container relative px-4 py-24 mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text">
              À PROPOS DE NOUS
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Left column with main text */}
              <div className="space-y-8">
                <div className="p-6 transition-shadow duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl">
                  <h3 className="mb-4 text-2xl font-semibold text-blue-900">
                    Notre Expertise
                  </h3>
                  <p className="text-lg leading-relaxed text-blue-800/80">
                    Spécialiste du marketing digital et du traitement des données massives
                    (Bigdata). Notre expertise nous permet d'offrir des solutions innovantes
                    et performantes à nos clients.
                  </p>
                </div>

                <div className="p-6 text-white shadow-xl bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Notre Équipe
                  </h3>
                  <p className="text-lg leading-relaxed text-blue-50">
                    KONTIKI SERVICE compte aujourd'hui plus de
                    30 collaborateurs passionnés et experts dans leurs domaines.
                  </p>
                </div>
              </div>

              {/* Right column with stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center p-6 text-center transition-shadow duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl">
                  <span className="text-4xl font-bold text-blue-900">30+</span>
                  <span className="mt-2 text-blue-600">Collaborateurs</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center transition-shadow duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl">
                  <span className="text-4xl font-bold text-blue-900">10+</span>
                  <span className="mt-2 text-blue-600">Années d'expérience</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-2 p-6 text-center transition-shadow duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 bg-yellow-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-blue-900">
                    Expert en Marketing Digital & Big Data
                  </span>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="p-8 mt-12 bg-white shadow-xl rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-lg text-blue-900">
                  Située à Antsahavola, notre équipe est prête à répondre à vos besoins
                  et à vous accompagner dans vos projets digitaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/3 transform translate-x-1/2 -translate-y-1/2 rounded-full h-1/3 bg-blue-50 blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/3 transform -translate-x-1/2 translate-y-1/2 rounded-full h-1/3 bg-yellow-50 blur-3xl opacity-30"></div>
        </div>

        <div className="container relative px-4 mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text">
              NOS SERVICES
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1.5 w-32 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Services Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-xl hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 transition-colors duration-300 rounded-lg bg-blue-50 group-hover:bg-blue-100">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="leading-relaxed text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  src={service}
                  alt="Services illustration"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



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
              <h2 className="font-sans text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
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
                    Postuler chez nous
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