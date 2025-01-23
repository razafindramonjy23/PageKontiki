import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

const SolutionCard = ({ title, description, icon, industries, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-2xl"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="w-16 h-16 p-3 bg-blue-100 rounded-lg">
          <motion.img
            src={icon}
            alt={title}
            className="object-cover w-full h-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {industries.map((industry, idx) => (
            <span
              key={idx}
              className="px-4 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full"
            >
              {industry}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center gap-2 mt-6 font-semibold text-blue-600 group"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

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
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white">
      
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-bold text-blue-900 md:text-6xl">
              Nos Solutions
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Des solutions innovantes pour développer votre business et maximiser votre potentiel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-2 bg-blue-100 rounded-full">
              {Object.entries({
                generation: 'Génération de Leads',
                emailing: 'Campagnes Emailing',
                qualification: 'Qualification Prospects'
              }).map(([key, label]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === key
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'text-blue-900 hover:bg-blue-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2"
          >
            {solutionsTabs[activeTab].map((solution, index) => (
              <SolutionCard key={index} {...solution} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths Section - Style Original */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-blue-900">
              Nos forces
            </h2>
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
                  <div className="absolute inset-0">
                    <img
                      src={strengths[current].image}
                      alt={strengths[current].title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
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
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white'
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

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// // Données des solutions
// const solutionsTabs = {
//   generation: [
//     {
//       title: "Génération de Leads",
//       description: "Collectez des prospects qualifiés et générez de nouveaux clients. Notre expertise en prospection vous permet d'atteindre efficacement votre cible.",
//       icon: "/api/placeholder/80/80",
//       industries: ["B2B", "Marketing", "Vente"]
//     },
//     {
//       title: "Gestion de Base de Données",
//       description: "Enrichissement et mise à jour de vos bases de données prospects pour des campagnes plus efficaces.",
//       icon: "/api/placeholder/80/80",
//       industries: ["Data", "CRM", "Marketing"]
//     }
//   ],
//   emailing: [
//     {
//       title: "Campagnes Emailing",
//       description: "Gestion complète de campagnes emailing, depuis la création de KIT, landing page jusqu'à l'envoi et l'analyse des résultats.",
//       icon: "/api/placeholder/80/80",
//       industries: ["Marketing Digital", "Communication", "E-commerce"]
//     },
//     {
//       title: "Stratégie Email Marketing",
//       description: "Développement de stratégies email personnalisées pour maximiser votre ROI et engagement client.",
//       icon: "/api/placeholder/80/80",
//       industries: ["Marketing", "Stratégie", "ROI"]
//     }
//   ],
//   qualification: [
//     {
//       title: "Qualification des Prospects",
//       description: "Nous qualifions les contacts pour cibler au plus juste les prospects de nos clients, garantissant une meilleure conversion.",
//       icon: "/api/placeholder/80/80",
//       industries: ["Prospection", "Sales", "Lead Scoring"]
//     },
//     {
//       title: "Analyse et Scoring",
//       description: "Évaluation précise de la qualité des leads pour optimiser vos efforts de conversion.",
//       icon: "/api/placeholder/80/80",
//       industries: ["Analytics", "Conversion", "Business Intelligence"]
//     }
//   ]
// };

// const strengths = [
//   {
//     title: "Equipe jeune, dynamique et compétente",
//     description: "Notre équipe allie fraîcheur d'esprit et expertise professionnelle",
//     image: "/api/placeholder/800/500",
//     color: "bg-blue-500"
//   },
//   {
//     title: "Large éventail de métiers intéressants",
//     description: "Des opportunités variées pour développer votre carrière",
//     image: "/api/placeholder/800/500",
//     color: "bg-yellow-500"
//   },
//   {
//     title: "Ambiance conviviale et professionnelle",
//     description: "Un environnement de travail équilibré et stimulant",
//     image: "/api/placeholder/800/500",
//     color: "bg-green-500"
//   },
//   {
//     title: "En pleine croissance",
//     description: "Une entreprise dynamique avec de nombreuses perspectives d'évolution",
//     image: "/api/placeholder/800/500",
//     color: "bg-purple-500"
//   }
// ];

// const SolutionCard = ({ title, description, icon, industries, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -10, transition: { duration: 0.2 } }}
//       className="p-8 transition-all duration-300 transform border bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 border-white/10"
//     >
//       <div className="flex flex-col items-start gap-4">
//         <div className="w-16 h-16 p-3 rounded-lg bg-yellow-400/20">
//           <motion.img
//             src={icon}
//             alt={title}
//             className="object-cover w-full h-full"
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-white">{title}</h3>
//         <p className="leading-relaxed text-white/80">{description}</p>
//         <div className="flex flex-wrap gap-2 mt-4">
//           {industries.map((industry, idx) => (
//             <span
//               key={idx}
//               className="px-4 py-1 text-sm font-medium text-yellow-300 border rounded-full bg-yellow-400/10 border-yellow-400/20"
//             >
//               {industry}
//             </span>
//           ))}
//         </div>
//         <motion.button
//           whileHover={{ x: 10 }}
//           className="flex items-center gap-2 mt-6 font-semibold text-yellow-400 group"
//         >
//           En savoir plus
//           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// const SolutionsPage = () => {
//   const [activeTab, setActiveTab] = useState('generation');
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % strengths.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + strengths.length) % strengths.length);
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-950">
//       {/* Hero Section */}
//       <section className="px-4 pt-32 pb-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
//               Nos Solutions
//             </h1>
//             <p className="max-w-2xl mx-auto text-xl text-white/80">
//               Des solutions innovantes pour développer votre business et maximiser votre potentiel
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section className="px-4 py-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-center mb-16">
//             <div className="inline-flex p-1 rounded-full bg-white/5 backdrop-blur-sm">
//               {Object.entries({
//                 generation: 'Génération de Leads',
//                 emailing: 'Campagnes Emailing',
//                 qualification: 'Qualification Prospects'
//               }).map(([key, label]) => (
//                 <motion.button
//                   key={key}
//                   onClick={() => setActiveTab(key)}
//                   className={`px-8 py-3 rounded-full font-medium transition-all ${
//                     activeTab === key
//                       ? 'bg-yellow-400 text-blue-950 shadow-lg'
//                       : 'text-white hover:bg-white/10'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {label}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             layout
//             className="grid gap-8 md:grid-cols-2"
//           >
//             {solutionsTabs[activeTab].map((solution, index) => (
//               <SolutionCard key={index} {...solution} index={index} />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Strengths Section */}
//       <section className="py-20">
//         <div className="max-w-6xl px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-16 text-center"
//           >
//             <h2 className="mb-6 text-4xl font-bold text-white">
//               Nos forces
//             </h2>
//             <p className="max-w-3xl mx-auto text-xl text-white/80">
//               Des solutions professionnelles pour développer votre business
//             </p>
//           </motion.div>

//           <div className="relative h-[500px] overflow-hidden rounded-xl">
//             <AnimatePresence initial={false} custom={direction}>
//               <motion.div
//                 key={current}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.2 }
//                 }}
//                 className="absolute w-full h-full"
//               >
//                 <div className="relative flex items-center w-full h-full">
//                   <div className="absolute inset-0">
//                     <img
//                       src={strengths[current].image}
//                       alt={strengths[current].title}
//                       className="object-cover w-full h-full"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-transparent" />
//                   </div>
//                   <div className="relative z-10 w-1/2 p-12 text-white">
//                     <h3 className="mb-4 text-3xl font-bold text-yellow-400">
//                       {strengths[current].title}
//                     </h3>
//                     <p className="text-xl text-white/90">
//                       {strengths[current].description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             <button
//               onClick={prevSlide}
//               className="absolute z-20 p-2 transform -translate-y-1/2 rounded-full bg-white/10 left-4 top-1/2 hover:bg-yellow-400/20"
//             >
//               <ChevronLeft className="w-6 h-6 text-white" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute z-20 p-2 transform -translate-y-1/2 rounded-full bg-white/10 right-4 top-1/2 hover:bg-yellow-400/20"
//             >
//               <ChevronRight className="w-6 h-6 text-white" />
//             </button>

//             <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 p-4">
//               {strengths.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > current ? 1 : -1);
//                     setCurrent(index);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     index === current ? 'bg-yellow-400 w-6' : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SolutionsPage;
