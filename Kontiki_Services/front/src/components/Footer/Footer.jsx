import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/d.jpg";

function Footer() {
    return (
        <footer className="p-10 font-sans tracking-wide bg-white">
            <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center h-full">
                    <Link to='/accueil'>
                        <img src={Logo} alt="Logo de Kontiki service" className="mb-4 w-52" />
                    </Link>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="https://www.linkedin.com/company/kontiki-service/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    width="50"
                                    height="50"
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
                            >
                                <img
                                    width="50"
                                    height="50"
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
                            >
                                <img
                                    width="50"
                                    height="50"
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
                            >
                                <img
                                    width="50"
                                    height="50"
                                    src="https://img.icons8.com/ios-filled/50/228BE6/facebook-new.png"
                                    alt="Contactez-nous via Facebook"
                                />
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="mb-4 text-lg font-semibold text-gray-700">Information</h4>
                    <ul className="space-y-2 list-none">
                        <li><Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link></li>
                        <li><Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
                        <li><Link to="/apropos" className="text-gray-600 hover:text-gray-900">À propos de nous</Link></li>
                        <li><Link to="/test" className="text-gray-600 hover:text-gray-900">Test</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contactez-nous</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="mb-4 text-lg font-semibold text-gray-700">Contact</h4>
                    <ul className="space-y-2 list-none">
                        <li><p className="text-gray-600"><a href="mailto:recrutement@kontikiservice.com">contact@kontikiservice.com</a></p></li>
                        <li><p className="text-gray-600">Tél: +261 33 28 895 30 /+261 34 62 259 76</p></li>
                        <li><p className="text-gray-600">Antsahavola – Antananarivo 101</p></li>
                    </ul>
                </div>
            </div>

            <p className='mt-10 text-sm text-center text-gray-800'>Copyright © 2024 Kontiki Service</p>
        </footer>
    );
}

export default Footer;
