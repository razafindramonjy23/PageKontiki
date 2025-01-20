import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeUp, FadeLeft, FadeRight } from '../../utility/animation';

// Imports des images...
import phone1 from '../../../assets/Images/pages/a_propos/phone.png'
import user1 from '../../../assets/Images/pages/a_propos/user1.jpg'
import user2 from '../../../assets/Images/pages/a_propos/user2.jpg'
import user3 from '../../../assets/Images/pages/a_propos/user3.jpg'
import user4 from '../../../assets/Images/pages/a_propos/user4.jpg'
import vision from '../../../assets/Images/pages/a_propos/vision.png'
import europeens from '../../../assets/Images/pages/a_propos/europeens.jpg'
import rita from '../../../assets/Images/pages/a_propos/Rita.jpg'
import tefy from '../../../assets/Images/pages/a_propos/tefy.jpg'



function A_propos() {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleMouseEnter = (event) => {
    setActiveEvent(event);
  }

  const handleMouseLeave = () => {
    setActiveEvent(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-amber-50">
      {/* Élément décoratif */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-blue-400 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 rounded-full -left-4 w-72 h-72 bg-amber-300 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-blue-300 rounded-full -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className='relative min-h-screen pt-20 font-sans'>
        <div className="container px-4 mx-auto">
          <div className="my-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800 transition-all duration-700 ease-in-out md:text-5xl ">
              Qui sommes nous vraiment ?
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-2 rounded-full bg-gradient-to-r from-blue-600 to-amber-400"></div>
            </div>

            <motion.div className="max-w-2xl mx-auto my-12 text-lg text-center">
              <p className="mt-8 text-blue-900">
                Spécialiste du marketing digital et du traitement des données massives (Bigdata).
              </p>
              <p className='mt-4 text-blue-900'>
                Située à Antsahavola, KONTIKI SERVICE compte aujourd'hui plus de 30 collaborateurs.
              </p>
            </motion.div>
          </div>
        </div>

        {/* App Section */}
        <motion.section
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 mx-4 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl lg:mx-12"
        >
          <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="mb-4 text-5xl font-bold text-blue-800">KONTIKI SERVICES</h2>
              <p className="mb-6 text-xl font-semibold transition-transform duration-300 ease-in-out text-amber-500 hover:scale-110">
                La première Application de Kontiki Sevices à Madagascar
              </p>


              {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg " className='w-98 h-98'>
                
                <circle cx="100" cy="100" r="90" fill="white" stroke="#e5e5e5" stroke-width="2" />              
                <text x="50" y="120"
                  font-family="Arial, sans-serif"
                  font-size="70"
                  font-weight="bold"
                  fill="#0066CC">K</text>

                <text x="95" y="120"
                  font-family="Arial, sans-serif"
                  font-size="70"
                  font-weight="bold"
                  fill="#0066CC">S</text>

                <path d="M95 130 Q120 130 140 120 L150 130 L140 140 Q120 130 95 130"
                  fill="#FFA500" />
              </svg> */}


              <p className="mb-8 text-blue-700">
                En quelques clics, accédez facilement à nos services
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button className="relative px-6 py-3 overflow-hidden text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  <span className="relative z-10">Génération de Leads</span>
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 rounded-lg group-hover:scale-100 group-hover:bg-white/10"></div>
                </button>
                <button className="relative px-6 py-3 overflow-hidden text-blue-900 transition-all duration-300 rounded-lg group bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-500 hover:to-amber-400">
                  <span className="relative z-10">Disponible sur Google Play</span>
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 rounded-lg group-hover:scale-100 group-hover:bg-white/10"></div>
                </button>
              </div>
            </div>
            <motion.div
              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 lg:mt-0 lg:w-1/2"
            >
              <img
                src={phone1}
                alt="KONTIKI Digital app"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/80 to-amber-50/80 backdrop-blur-sm"></div>
        <div className="container relative grid gap-16 px-6 mx-auto lg:grid-cols-2 lg:gap-24">
          <motion.div
            variants={FadeRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <h2 className="mb-6 text-3xl font-bold text-blue-800">Des métiers d'avenir</h2>
            <p className="mb-8 text-lg text-slate-700">
              Nous offrons une opportunité aux jeunes malgaches d'exprimer leurs potentiels et d'occuper des métiers d'avenir challengeant.
            </p>
            <div className="relative overflow-hidden group">
              <div className="absolute transition-all duration-300 opacity-0 -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl group-hover:opacity-100"></div>
              <img
                src={rita}
                alt="Photo de Rita"
                className="relative w-full transition-all duration-500 shadow-lg h-96 object-cover rounded-2xl hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group lg:mt-32"
          >
            <h2 className="mb-6 text-3xl font-bold text-blue-800">Notre vision</h2>
            <p className="mb-8 text-lg text-slate-700">
              Vous évoluerez dans l'environnement passionnant du marketing digital, et gagnerez rapidement en compétence et en responsabilité pour construire ensemble l'avenir de la société.
            </p>
            <div className="relative overflow-hidden group">
              <div className="absolute transition-all duration-300 opacity-0 -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-300/20 rounded-2xl blur-xl group-hover:opacity-100"></div>
              <img
                src={tefy}
                alt="Photo de Tefy"
                className="relative w-full transition-all duration-500 shadow-lg h-96 object-cover rounded-2xl hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nouvelle section Partenaires */}
      <section className="relative py-32 bg-white/50">
        <div className="container relative px-6 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-blue-800 transition-all duration-700 ease-in-out hover:text-5xl">
              Notre partenaire de services
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-2 mb-20 rounded-full bg-gradient-to-r from-blue-600 to-amber-400"></div>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              variants={FadeRight(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute transition-all duration-300 opacity-0 -inset-4 bg-gradient-to-r from-blue-600/10 to-amber-400/10 rounded-2xl blur-xl group-hover:opacity-100"></div>
              <img
                src={europeens}
                alt="KONTIKI Digital app"
                className="relative w-full transition-all duration-500 shadow-lg h-96 object-cover rounded-2xl hover:scale-[1.02]"
              />
            </motion.div>

            <motion.div
              variants={FadeLeft(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center"
            >
              <p className="text-2xl font-light leading-relaxed text-blue-700">
                L'agence propose à ses clients européens des prestations de 
                <span className="font-medium"> publicité digitale</span>,
                de <span className="font-medium">conseil en communication</span> et CRM, 
                de <span className="font-medium">génération de prospects qualifiés</span> et 
                d'animation de bases de contacts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <motion.section
        variants={FadeUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-32 bg-gradient-to-b from-blue-50 to-amber-50"
      >
        <div className="container relative px-6 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-blue-800 md:text-5xl">Notre équipe de Superviseurs</h2>
            <p className="max-w-2xl mx-auto mt-8 text-xl text-blue-700">
              Chaque département possède leurs propre Superviseurs.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              { img: user1, name: "Rita Kontiki", role: "Commercial", description: "Description", dept: "/marketing" },
              { img: user2, name: "Mamisoa Kontiki", role: "Affiliate", description: "Bonjour", dept: "/rd" },
              { img: user3, name: "Andre Kontiki", role: "Dévellopeur", description: "Nous sommes là pour vous", dept: "/dev" },
              { img: user4, name: "Deddy Kontiki", role: "Trafic Manager", description: "Nous sommes la team call", dept: "/am" },
              { img: user3, name: "Landy Kontiki", role: "RD", description: "hello", dept: "/tm" }
            ].map((member, index) => (
              <div key={index} className="relative p-8 transition-all duration-500 shadow-lg group bg-white/80 backdrop-blur-sm rounded-2xl hover:scale-105 hover:shadow-blue-200">
                <div className="absolute inset-x-0 flex justify-center -top-16">
                  <div className="w-32 h-32 overflow-hidden transition-all duration-300 rounded-full ring-4 ring-blue-200 group-hover:ring-amber-300">
                    <img src={member.img} alt={member.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="pt-16 text-center">
                  <h5 className="text-xl font-semibold text-blue-800">{member.name}</h5>
                  <span className="text-amber-600">{member.role}</span>
                  <p className="mt-4 text-sm">
                    {member.description}
                  </p>
                  <Link
                    to={member.dept}
                    className="relative block px-6 py-3 mt-6 overflow-hidden text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-blue-600 to-amber-400 hover:from-blue-700 hover:to-amber-500"
                  >
                    <span className="relative z-10">Département</span>
                    <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 rounded-lg group-hover:scale-100 group-hover:bg-white/10"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default A_propos