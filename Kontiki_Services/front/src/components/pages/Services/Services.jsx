import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Composant Card pour les solutions
const SolutionCard = ({ title, description, icon, industries }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
          <motion.img
            src={icon}
            alt={title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      </div>
      <p className="mb-4 leading-relaxed text-gray-600">{description}</p>
      <div className="mt-4">
        <h4 className="mb-2 font-medium text-gray-800">Domaines d'expertise :</h4>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm text-blue-800 border border-blue-100 rounded-full bg-blue-50"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Données des forces
const strengths = [
  {
    title: "Equipe jeune, dynamique et compétente",
    description: "Notre équipe allie fraîcheur d'esprit et expertise professionnelle",
    image: "/api/placeholder/800/500",
    color: "bg-blue-500"
  },
  {
    title: "Large éventail de métiers intéressants",
    description: "Des opportunités variées pour développer votre carrière",
    image: "/api/placeholder/800/500",
    color: "bg-yellow-500"
  },
  {
    title: "Ambiance conviviale et professionnelle",
    description: "Un environnement de travail équilibré et stimulant",
    image: "/api/placeholder/800/500",
    color: "bg-green-500"
  },
  {
    title: "En pleine croissance",
    description: "Une entreprise dynamique avec de nombreuses perspectives d'évolution",
    image: "/api/placeholder/800/500",
    color: "bg-purple-500"
  }
];

// Données des solutions
const solutionsTabs = {
  generation: [
    {
      title: "Génération de Leads",
      description: "Collectez des prospects qualifiés et générez de nouveaux clients. Notre expertise en prospection vous permet d'atteindre efficacement votre cible.",
      icon: "/api/placeholder/80/80",
      industries: ["B2B", "Marketing", "Vente"]
    },
    {
      title: "Gestion de Base de Données",
      description: "Enrichissement et mise à jour de vos bases de données prospects pour des campagnes plus efficaces.",
      icon: "/api/placeholder/80/80",
      industries: ["Data", "CRM", "Marketing"]
    }
  ],
  emailing: [
    {
      title: "Campagnes Emailing",
      description: "Gestion complète de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.",
      icon: "/api/placeholder/80/80",
      industries: ["Marketing Digital", "Communication", "E-commerce"]
    },
    {
      title: "Stratégie Email Marketing",
      description: "Développement de stratégies email personnalisées pour maximiser votre ROI et engagement client.",
      icon: "/api/placeholder/80/80",
      industries: ["Marketing", "Stratégie", "ROI"]
    }
  ],
  qualification: [
    {
      title: "Qualification des Prospects",
      description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients, garantissant une meilleure conversion.",
      icon: "/api/placeholder/80/80",
      industries: ["Prospection", "Sales", "Lead Scoring"]
    },
    {
      title: "Analyse et Scoring",
      description: "Évaluation précise de la qualité des leads pour optimiser vos efforts de conversion.",
      icon: "/api/placeholder/80/80",
      industries: ["Analytics", "Conversion", "Business Intelligence"]
    }
  ]
};

// Composant principal
const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('generation');
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % strengths.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Section Activités Principales */}
      <section className="pt-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl">
              Nos activités principales
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Des solutions professionnelles pour développer votre business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-white rounded-full shadow-md">
              {Object.entries({
                generation: 'Génération de Leads',
                emailing: 'Campagnes Emailing',
                qualification: 'Qualification Prospects'
              }).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full transition duration-300 ${activeTab === key
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-600 hover:bg-blue-50'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid gap-8 md:grid-cols-2">
            {solutionsTabs[activeTab].map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Nos Forces */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl">
              Nos forces
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Des solutions professionnelles pour développer votre business
            </p>
          </motion.div>

          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full"
              >
                <div className="relative flex items-center w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                    <img
                      src={strengths[current].image}
                      alt={strengths[current].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative z-10 w-1/2 p-12 text-white">
                    <h3 className="mb-4 text-3xl font-bold">
                      {strengths[current].title}
                    </h3>
                    <p className="text-xl">
                      {strengths[current].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute z-20 p-2 transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 hover:bg-blue-50"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute z-20 p-2 transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 hover:bg-blue-50"
            >
              <ChevronRight className="w-6 h-6 text-blue-900" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 p-4">
              {strengths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-amber-400 w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;