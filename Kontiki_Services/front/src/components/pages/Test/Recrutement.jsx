import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const KontikiTest = () => {
  const getCardVariants = (index) => {
    // Définir différentes animations basées sur l'index
    const animations = [
      // Première rangée
      { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }, // Gauche
      { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }, // Haut
      { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },  // Droite
      // Deuxième rangée
      { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }, // Gauche
      { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }   // Bas
    ];

    return {
      ...animations[index],
      visible: {
        ...animations[index].visible,
        transition: { duration: 0.8, delay: index * 0.2 }
      }
    };
  };

  const services = [
    {
      title: "Développeurs",
      description: "N'hésitez pas à faire notre test pour rejoindre la communauté",
      icon: "https://img.icons8.com/ios/50/programming-flag.png",
      route: "/entretienDev"
    },
    {
      title: "Traffic Manager",
      description: "Des détails pour les managers en trafic.",
      icon: "https://img.icons8.com/ios/50/traffic-jam.png",
      route: "/entretienTM"
    },
    {
      title: "Affiliate Manager",
      description: "L'affilié reçoit une commission qui varie.",
      icon: "https://img.icons8.com/ios/50/manager.png",
      route: "/testAM"
    },
    {
      title: "Responsable Deliverability",
      description: "L'affilié reçoit une commission qui varie.",
      icon: "https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-bulk-mai-email-marketing-outline-outline-black-m-oki-orlando.png",
      route: "/testAM"
    },
    {
      title: "Commercial",
      description: "L'affilié reçoit une commission qui varie.",
      icon: "https://img.icons8.com/ios/50/shopping-mall.png",
      route: "/commercial"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      {/* <div className="relative py-16 overflow-hidden bg-blue-950">
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-950 opacity-90"></div>
        </div>
        <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="pt-20 font-sans text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              KONTIKI TEST
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mt-4"
            >
              <div className="w-32 h-2 rounded-full bg-amber-400"></div>
            </motion.div>
          </div>
        </div>
      </div> */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/400"
            alt="Dark background"
            className="object-cover w-full h-full brightness-50"
          />
          <div className="absolute inset-0 bg-blue-100" />
        </div>

        <div className="relative flex flex-col items-center justify-center h-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl md:text-6xl"
          >
            EXPLORER NOS OPPORTUNITÉS <span className="flex justify-center">DE CARRIÈRE</span> 
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-4"
          >
            <div className="w-32 h-2 rounded-full bg-amber-400" />
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={getCardVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={service.route}
                className="group relative block h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-blue-950 to-blue-800 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold transition-colors text-blue-950 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-gray-600 transition-colors group-hover:text-gray-200">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="transition-colors text-amber-500 group-hover:text-amber-300">
                      Aller à la page →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KontikiTest;