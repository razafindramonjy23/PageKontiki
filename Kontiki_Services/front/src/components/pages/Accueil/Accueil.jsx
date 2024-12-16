// import React, { useState } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";
// import { Link } from "react-scroll";
// // import '../../../App.scss';

// function Accueil() {
//   const servicesData = [
//     {
//       title: "Analyse Prédictive",
//       description:
//         "Anticipez les tendances et les risques avec nos algorithmes avancés.",
//       icon: "/api/placeholder/50/50",
//     },
//     {
//       title: "Automatisation",
//       description: "Optimisez vos processus métiers avec l'IA intelligente.",
//       icon: "/api/placeholder/50/50",
//     },
//     {
//       title: "Conseil Stratégique",
//       description: "Transformez vos données en décisions stratégiques.",
//       icon: "/api/placeholder/50/50",
//     },
//   ];

//   return (
//     <>
//       {/* Banniere */}
//       <div className="relative h-screen flex items-center bg-gradient-to-r from-blue-400 to-blue-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
//               Kontiki Service <br /> au Service de Votre Entreprise
//             </h1>
//             <p className="text-xl mb-10 animate-fadeIn animation-delay-300">
//               Transformez vos données en opportunités stratégiques avec nos
//               solutions d'IA avancées.
//             </p>
//             <div className="flex space-x-4 animate-fadeIn animation-delay-500">
//               <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition flex items-center">
//                 Nos Services <ChevronRight className="ml-2" />
//               </button>
//               <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition">
//                 Contactez-nous
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* services */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Nos Services 
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {servicesData.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
//               >
//                 <img
//                   src={service.icon}
//                   alt={service.title}
//                   className="mb-4 w-16 h-16"
//                 />
//                 <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }

// export default Accueil;

import React, { useState, useEffect } from "react";

const images = [
  { src: "https://via.placeholder.com/1920x1080", title: "Slide 1", subtitle: "Welcome to Intelicia" },
  { src: "https://via.placeholder.com/1920x1080", title: "Slide 2", subtitle: "We Make Things Possible" },
  { src: "https://via.placeholder.com/1920x1080", title: "Slide 3", subtitle: "Join Our Journey" },
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
      <section className="relative h-screen overflow-hidden">
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <p className="text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
          At Intelicia, we provide innovative solutions to help businesses grow. Our expertise spans
          across multiple industries and focuses on delivering excellence.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-600">Tailored strategies to meet your business goals.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">Building robust software solutions for your needs.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-600">24/7 support to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
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