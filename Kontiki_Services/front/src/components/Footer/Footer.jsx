import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/d.jpg";

function Footer() {
    return (
        <footer className="py-16 font-sans tracking-wide bg-gradient-to-b from-white to-blue-50">
            <div className="container px-4 mx-auto">
                <div className="grid h-full grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Logo et réseaux sociaux */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <Link to='/accueil' className="transition-transform hover:scale-105">
                            <img src={Logo} alt="Logo de Kontiki service" className="mb-6 w-52" />
                        </Link>
                        <ul className="flex space-x-8">
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/kontiki-service/posts/?feedView=all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-110"
                                >
                                    <img
                                        width="40"
                                        height="40"
                                        src="https://img.icons8.com/ios-filled/50/228BE6/linkedin-circled--v1.png"
                                        alt="Contactez-nous via LinkedIn"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="skype:live.username?chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-110"
                                >
                                    <img
                                        width="40"
                                        height="40"
                                        src="https://img.icons8.com/ios-glyphs/60/228BE6/skype.png"
                                        alt="Contactez-nous via Skype"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:recrutement@kontikiservice.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-110"
                                >
                                    <img
                                        width="40"
                                        height="40"
                                        src="https://img.icons8.com/color/48/gmail-new.png"
                                        alt="Contacter Kontiki Service par email"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/kontikiservice"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-110"
                                >
                                    <img
                                        width="40"
                                        height="40"
                                        src="https://img.icons8.com/ios-filled/50/228BE6/facebook-new.png"
                                        alt="Contactez-nous via Facebook"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu Information */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <h4 className="mb-6 text-xl font-bold text-blue-600">Information</h4>
                        <ul className="space-y-3 list-none">
                            <li>
                                <Link to="/" className="inline-block text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:translate-x-2">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="inline-block text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:translate-x-2">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/apropos" className="inline-block text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:translate-x-2">
                                    À propos de nous
                                </Link>
                            </li>
                            <li>
                                <Link to="/test" className="inline-block text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:translate-x-2">
                                    Rejoignez-nous
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="inline-block text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:translate-x-2">
                                    Contactez-nous
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <h4 className="mb-6 text-xl font-bold text-blue-600">Contact</h4>
                        <ul className="space-y-3 list-none">
                            <li>
                                <a 
                                    href="mailto:contact@kontikiservice.com" 
                                    className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-blue-600"
                                >
                                    <span className="text-yellow-500">✉</span>
                                    contact@kontikiservice.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <span className="text-yellow-500">☏</span>
                                +261 33 28 895 30 /+261 34 62 259 76
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <span className="text-yellow-500">📍</span>
                                Antsahavola – Antananarivo 101
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 mt-10 border-t border-blue-100">
                    <p className='text-sm text-center text-gray-600'>
                        Copyright © 2024 <span className="text-blue-600">Kontiki Service</span>. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;