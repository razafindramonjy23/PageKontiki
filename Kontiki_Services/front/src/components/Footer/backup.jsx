import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="pt-12 pb-6 font-sans bg-gradient-to-b from-white to-sky-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Logo et Réseaux Sociaux */}
                    <div className="flex flex-col items-center space-y-6 lg:items-start">
                        <Link to='/accueil' className="block">
                            <div className="text-3xl font-black">
                                <span className="text-sky-500">KONTIKI</span>
                                <span className="text-gray-800">SERVICE</span>
                            </div>
                        </Link>
                        
                        {/* Réseaux sociaux */}
                        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                            <a
                                href="https://www.linkedin.com/company/kontiki-service/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition transform hover:scale-110"
                            >
                                <div className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="skype:live.username?chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition transform hover:scale-110"
                            >
                                <div className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm5.293-14.293l-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707 6.707-6.707-1.414-1.414z"/>
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="mailto:recrutement@kontikiservice.com"
                                className="transition transform hover:scale-110"
                            >
                                <div className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/kontikiservice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition transform hover:scale-110"
                            >
                                <div className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center space-y-4 lg:items-start">
                        <h4 className="text-xl font-semibold text-sky-500">Informations</h4>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 transition-colors hover:text-sky-500">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-600 transition-colors hover:text-sky-500">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/apropos" className="text-gray-600 transition-colors hover:text-sky-500">
                                    À propos de nous
                                </Link>
                            </li>
                            <li>
                                <Link to="/test" className="text-gray-600 transition-colors hover:text-sky-500">
                                    Test
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 transition-colors hover:text-sky-500">
                                    Contactez-nous
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center space-y-4 lg:items-start">
                        <h4 className="text-xl font-semibold text-sky-500">Contact</h4>
                        <ul className="flex flex-col space-y-3">
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:contact@kontikiservice.com" className="text-gray-600 transition-colors hover:text-sky-500">
                                    contact@kontikiservice.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-gray-600">+261 33 28 895 30 / +261 34 62 259 76</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-600">Antsahavola – Antananarivo 101</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                    <p className="text-sm text-center text-gray-500">
                        Copyright © {new Date().getFullYear()} Kontiki Service. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;