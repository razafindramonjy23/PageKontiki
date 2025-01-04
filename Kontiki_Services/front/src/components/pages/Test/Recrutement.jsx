import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../../utility/animation";

function Test() {
  return (
    <>
      {/* <div className="flex justify-around h-screen min-h-screen font-sans bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <section className="pt-60">
          <Link
            to="/codeEditor"
            className="block max-w-xs p-10 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                
              >
                
              </svg>
              <h3 className="text-4xl font-semibold transition-transform duration-300 ease-in-out text-blue-950 md:text-3xl hover:scale-125">
                Editeur de code
              </h3>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-white">
              A vous de jouer
            </p>
          </Link>
        </section>
      </div> */}

      <div className="font-sans text-center pt-30 ">
        <h2 className="text-xl font-semibold transition-all duration-700 ease-in-out text-blue-950 md:text-5xl">
          KONTIKI TEST
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>
      </div>

      <div className="flex flex-col justify-around h-auto p-4 font-sans bg-slate-100 md:h-screen">
        <div className="flex flex-col justify-around pt-10 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <motion.section
            variants={FadeRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/entretienDev"
              className="block w-full p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg md:w-72 group ring-1 ring-slate-900/5 hover:bg-sky-300 hover:ring-sky-500"
            >
              <img
                src="https://img.icons8.com/ios/50/programming-flag.png"
                alt="Icon"
                className="mx-auto"
              />
              <div className="text-2xl font-semibold text-center text-slate-900 group-hover:text-white">
                Test pour les Développeurs
              </div>
              <p className="text-center text-slate-500 group-hover:text-white">
                N'hésitez pas à faire notre test pour rejoindre la communauté
              </p>
              <Link
                to="#"
                className="block text-center text-blue-950 hover:underline"
              >
                Aller à la page →
              </Link>
            </Link>
          </motion.section>

          <motion.section
            variants={FadeUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/entretienTM"
              className="block w-full p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg md:w-72 group ring-1 ring-slate-900/5 hover:bg-sky-300 hover:ring-sky-500"
            >
              <img
                src="https://img.icons8.com/ios/50/traffic-jam.png"
                alt="Icon"
                className="mx-auto"
              />
              <div className="text-2xl font-semibold text-center text-slate-900 group-hover:text-white">
                Traffic pour Manager
              </div>
              <p className="text-center text-slate-500 group-hover:text-white">
                Des détails pour les managers en trafic.
              </p>
              <Link
                to="#"
                className="block text-center text-blue-950 hover:underline"
              >
                Aller à la page →
              </Link>
            </Link>
          </motion.section>

          <motion.section
            variants={FadeLeft(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/testAM"
              className="block w-full p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg md:w-72 group ring-1 ring-slate-900/5 hover:bg-sky-300 hover:ring-sky-500"
            >
              <img
                src="https://img.icons8.com/ios/50/manager.png"
                alt="Icon"
                className="mx-auto"
              />
              <div className="text-2xl font-semibold text-center text-slate-900 group-hover:text-white">
                Affiliète Manager
              </div>
              <p className="text-center text-slate-500 group-hover:text-white">
                L’affilié reçoit une commission qui varie.
              </p>
              <Link
                to="#"
                className="block text-center text-blue-950 hover:underline"
              >
                Aller à la page →
              </Link>
            </Link>
          </motion.section>
        </div>

        <div className="flex flex-col justify-around pt-10 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <motion.section
            variants={FadeUp(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/testAM"
              className="block w-full p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg md:w-72 group ring-1 ring-slate-900/5 hover:bg-sky-300 hover:ring-sky-500"
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-bulk-mai-email-marketing-outline-outline-black-m-oki-orlando.png"
                alt="external-bulk-mai-email-marketing-outline-outline-black-m-oki-orlando"
                className="mx-auto"
              />
              <div className="text-2xl font-semibold text-center text-slate-900 group-hover:text-white">
                Test RD
              </div>
              <p className="text-center text-slate-500 group-hover:text-white">
                L’affilié reçoit une commission qui varie.
              </p>
              <Link
                to="#"
                className="block text-center text-blue-950 hover:underline"
              >
                Aller à la page →
              </Link>
            </Link>
          </motion.section>

          <motion.section
            variants={FadeUp(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/testAM"
              className="block w-full p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg md:w-72 group ring-1 ring-slate-900/5 hover:bg-sky-300 hover:ring-sky-500"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/shopping-mall.png"
                alt="shopping-mall"
                className="mx-auto"
              />
              <div className="text-2xl font-semibold text-center text-slate-900 group-hover:text-white">
                Commercial
              </div>
              <p className="text-center text-slate-500 group-hover:text-white">
                L’affilié reçoit une commission qui varie.
              </p>
              <Link
                to="#"
                className="block text-center text-blue-950 hover:underline"
              >
                Aller à la page →
              </Link>
            </Link>
          </motion.section>
        </div>
      </div>
    </>
  );
}

export default Test;
