import React, { useState } from 'react'
import { Link } from 'react-router-dom';



import phone1 from '../../../assets/Images/pages/a_propos/phone.png'
import user1 from '../../../assets/Images/pages/a_propos/user1.jpg'
import user2 from '../../../assets/Images/pages/a_propos/user2.jpg'
import user3 from '../../../assets/Images/pages/a_propos/user3.jpg'
import user4 from '../../../assets/Images/pages/a_propos/user4.jpg'
import vision from '../../../assets/Images/pages/a_propos/vision.png'
import europeens from '../../../assets/Images/pages/a_propos/europeens.jpg'
import rita from '../../../assets/Images/pages/a_propos/Rita.jpg'
import tefy from '../../../assets/Images/pages/a_propos/tefy.jpg'

import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';
import { FadeLeft } from '../../utility/animation';
import { FadeRight } from '../../utility/animation';




function A_propos() {

  const [activeEvent, setActiveEvent] = useState(null);

  const handleMouseEnter = (event) => {
    setActiveEvent(event);
  }

  const handleMouseLeave = () => {
    setActiveEvent(null);
  }

  return (
    <>


      <div className='h-screen pt-20 font-sans'>
        <div className="my-8 text-center">
          <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-4xl hover:text-5xl">
            Qui sommes nous vraiment ?
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-amber-500"></div>
          </div>

          <motion.div

            className="my-8 text-lg text-center">
            <p className="mt-20 text-blue-950">
              Spécialiste du marketing digital et du traitement des données massives (Bigdata).<br />
            </p>
            <p className='mb-6 text-blue-950'>
              Située à Antsahavola, KONTIKI SERVICE compte aujourd’hui plus de 30 collaborateurs.
            </p>
          </motion.div>
        </div>

        <motion.section

          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="py-16 bg-white">
          <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="mb-4 text-5xl font-bold text-blue-950">KONTIKI SERVICES</h2>
              <p className="mb-6 text-lg font-semibold text-green-800 transition-transform duration-300 ease-in-out hover:scale-110">
                La première Application de Kontiki Sevices à Madagascar
              </p>
              <p className="mb-8 text-gray-600">
                En quelques clics, accédez facilement à nos services
              </p>

              <div className="flex justify-center space-x-4 lg:justify-start">
                <p className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg">
                  {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.3 2.7 8.1 6.5 9.5.5.1.7-.2.7-.5v-1.7c-2.7.5-3.2-1.3-3.2-1.3-.4-1-.9-1.2-.9-1.2-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.3 2.1 1 2.6.8.1-.5.3-.8.5-1-2.2-.3-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.8-1.3 2.6-1 2.6-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.6 0 3.7-2.3 4.4-4.5 4.7.3.3.6.7.6 1.3v2c0 .3.2.6.7.5C19.3 20.1 22 16.3 22 12c0-5.5-4.5-10-10-10z" />
                  </svg> */}
                  Télécharger dans Apple Store
                </p>
                <p className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg">
                  {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.3 2.7 8.1 6.5 9.5.5.1.7-.2.7-.5v-1.7c-2.7.5-3.2-1.3-3.2-1.3-.4-1-.9-1.2-.9-1.2-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.3 2.1 1 2.6.8.1-.5.3-.8.5-1-2.2-.3-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.6-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.8-1.3 2.6-1 2.6-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.6 0 3.7-2.3 4.4-4.5 4.7.3.3.6.7.6 1.3v2c0 .3.2.6.7.5C19.3 20.1 22 16.3 22 12c0-5.5-4.5-10-10-10z" />
                  </svg> */}
                  Disponible sur Google Play
                </p>
              </div>
            </div>
            <motion.div

              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}

              className="mt-12 lg:mt-0 lg:w-1/2">
              <img
                src={phone1}
                alt="KONTIKI Digital app"
                className="w-full"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>


      <section className="h-screen py-32 bg-white">
        <div className="flex flex-col items-center gap-32 px-20 mx-auto lg:flex-row">
          <motion.div

            variants={FadeRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className="mt-12 lg:mt-0 lg:w-1/2">
            <motion.h2

              variants={FadeRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}

              className="mb-4 text-3xl font-bold text-blue-950">Des métiers d'avenirs</motion.h2>
            <motion.p

              variants={FadeRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}

              className="mb-8 text-lg text-gray-600">
              Nous offrons une opportunité aux jeunes malgaches d'exprimer leurs potentiels et d'occuper des métiers d'avenir challengeant.
            </motion.p>
            <img width="500" height="150" src={rita} alt="Photo de Rita" className='rounded-md shadow-md' />
          </motion.div>

          <motion.div

            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className="text-center lg:text-left lg:w-1/2 ">
            <h2 className="mb-4 text-3xl font-bold text-blue-950">Notre vision</h2>
            <p className="mb-8 text-lg text-gray-600">
              Vous évoluerez dans l'environnement passionnant du marketing digital, et gagnerez rapidement en compétence et en responsabilité pour construire ensemble l'avenir de la société.
            </p>
            <img width="500" height="150" src={tefy} alt="Photo de Tefy" className='rounded-md shadow-md' />
          </motion.div>

        </div>
      </section>



      <section className="h-screen py-32 font-sans bg-white">
        <div className="mb-20 text-center ">
          <h2 className="box-border h-20 text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-3xl hover:text-4xl">
            Notre partenaire de services ?
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 mb-20 bg-amber-500"></div>
          </div>
        </div>
        <div className="flex flex-col items-center px-32 mx-auto lg:flex-row gap-7">

          <motion.div

            variants={FadeRight(0.8)}
            initial="hidden"
            animate="visible"

            className="pr-12 mt-12 lg:mt-0 lg:w-1/2">
            <img
              src={europeens}
              alt="KONTIKI Digital app"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div

            variants={FadeLeft(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className="pl-5 text-center lg:text-left lg:w-1/2 ">
            <p className="mb-8 text-2xl text-gray-600">
              L’agence propose à ses clients européens des prestations de publicité digitale,
              de conseil en communication et CRM, de génération de prospects qualifiés et d’animation de bases de contacts.
            </p>
          </motion.div>

        </div>
      </section>


      <motion.section

        variants={FadeUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}


        className='py-20 font-sans'>
        <div className='bg-white'>
          <div className="container px-6 mx-auto md:px-12 lg:px-8">
            <div className="mt-20 mb-12 space-y-4 text-center">
              <h1 className="text-4xl font-bold text-blue-950 md:text-5xl" >Notre équipe de Superviseurs</h1>
              <p className="px-5 py-5 mt-10 mb-10 text-gray-600 lg:w-8/12 lg:mx-auto">
                Chaque département possède leurs propre Superviseurs.
              </p>
            </div>


            <div className="grid py-20 gap-28 md:gap-12 md:grid-cols-3">
              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user1} alt="RitaKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Rita Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Commercial</span>
                </div>
                <Link to="/call" className="block px-4 py-2 mx-auto text-center text-white transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg w-max hover:scale-95">Département</Link>
              </div>

              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user2} alt="MamisoaKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Mamisoa Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Affiliète</span>
                </div>
                <Link to="/TeamCall" className="block px-4 py-2 mx-auto text-center text-white transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg w-max hover:scale-95">Département</Link>
              </div>

              <div className="space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user3} alt="AndreKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Andre Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Dévellopeur</span>
                </div>
                <Link to="/dev" className="block px-4 py-2 mx-auto text-center text-white transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg w-max hover:scale-95">Département</Link>
              </div>

              <div className="mt-20 space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user4} alt="DeddyKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Deddy Kontiki</h5>
                  <span className='text-sm text-gray-500 '>Trafic Manager</span>
                </div>
                <Link to="/TeamCall" className="block px-4 py-2 mx-auto text-center text-white transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg w-max hover:scale-95">Département</Link>
              </div>

              <div className="mt-20 space-y-4 text-center border-t-4 group">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden ">
                  <img src={user3} alt="DeddyKontiki" loading='lazy' width="640" height="805" className='object-cover w-full h-full mx-auto transition duration-300 scale-125 -rotate-45 ' />
                </div>
                <div className='text-center'>
                  <h5 className='text-xl font-semibold text-gray-800'>Landy Kontiki</h5>
                  <span className='text-sm text-gray-500 '>RD</span>
                </div>
                <Link to="/TeamRD" className="block px-4 py-2 mx-auto text-center text-white transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg w-max hover:scale-95">Département</Link>
              </div>

            </div>
          </div>
        </div>
      </motion.section>




      <div className="flex flex-col items-center py-12 bg-gradient-to-r from-teal-400 to-blue-700">
        {/* Chronologie */}
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-x-0 h-1 transform -translate-y-1/2 bg-gray-200 top-1/2"></div>

          {/* Événements de la chronologie */}
          <div className="relative flex flex-col items-center justify-between px-4 md:flex-row md:px-8">
            {/* Événement 1 */}
            <div
              className="flex flex-col items-center mb-6 text-center md:mb-0"
              onMouseEnter={() => handleMouseEnter('event1')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-6 h-6 bg-white border-2 border-teal-500 rounded-full -top-full"></div>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">Bienvenue</p>
              <p className="text-sm text-gray-200">01 February 2015</p>

              {/* Affichage dynamique de la description */}
              {activeEvent === 'event1' && (
                <div className="absolute w-64 p-4 -mt-24 text-center bg-white rounded-lg shadow-md -top-20">
                  <h3 className="font-bold text-purple-600">Bienvenue chez Kontiki</h3>
                  <p className="mt-2 text-gray-600">
                    Le voyage commence ici. Préparez-vous pour une aventure passionnante.
                  </p>
                </div>
              )}
            </div>

            {/* Événement 2 */}
            <div
              className="flex flex-col items-center mb-6 text-center md:mb-0"
              onMouseEnter={() => handleMouseEnter('event2')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-6 h-6 bg-teal-500 border-2 border-teal-500 rounded-full"></div>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">Création de KONTIKI</p>
              <p className="text-sm text-gray-200">19 Mars 2019</p>

              {/* Affichage dynamique de la description */}
              {activeEvent === 'event2' && (
                <div className="absolute w-64 p-4 -mt-24 text-center bg-white rounded-lg shadow-md -top-full">
                  <h3 className="font-bold text-purple-600">First Work!</h3>
                  <h4 className="text-xl font-semibold text-teal-600">Be Productive!</h4>
                  <p className="mt-2 text-gray-600">
                    A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradise.
                  </p>
                </div>
              )}
            </div>

            {/* Événement 3 */}
            <div
              className="flex flex-col items-center mb-6 text-center md:mb-0"
              onMouseEnter={() => handleMouseEnter('event3')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-6 h-6 bg-white border-2 border-teal-500 rounded-full"></div>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">Christmas</p>
              <p className="text-sm text-gray-200">31 December 2015</p>

              {/* Affichage dynamique de la description */}
              {activeEvent === 'event3' && (
                <div className="absolute top-0 w-64 p-4 -mt-24 text-center bg-white rounded-lg shadow-md">
                  <h3 className="font-bold text-purple-600">Christmas!</h3>
                  <p className="mt-2 text-gray-600">Time to celebrate with family and friends!</p>
                </div>
              )}
            </div>

            {/* Événement 4 */}
            <div
              className="flex flex-col items-center mb-6 text-center md:mb-0"
              onMouseEnter={() => handleMouseEnter('event4')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-6 h-6 bg-white border-2 border-teal-500 rounded-full"></div>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">First Meetup</p>
              <p className="text-sm text-gray-200">05 February 2015</p>

              {/* Affichage dynamique de la description */}
              {activeEvent === 'event4' && (
                <div className="absolute top-0 w-64 p-4 -mt-24 text-center bg-white rounded-lg shadow-md">
                  <h3 className="font-bold text-purple-600">First Meetup!</h3>
                  <p className="mt-2 text-gray-600">Meet like-minded individuals and network!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default A_propos
