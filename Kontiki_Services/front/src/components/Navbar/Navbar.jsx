import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/Logo.jpg";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/accueil'); // État pour l'onglet actif

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Met à jour l'onglet actif lorsque vous cliquez
    setIsMenuOpen(false); // Ferme le menu mobile après un clic
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/api/placeholder/150/50" 
              alt="Kontiki logo" 
              className="h-10"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/accueil" 
              className={`text-gray-800 hover:text-blue-600 transition ${activeLink === '/accueil' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => handleLinkClick('/accueil')}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-800 hover:text-blue-600 transition ${activeLink === '/services' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => handleLinkClick('/services')}
            >
              Services
            </Link>
            <Link 
              to="/entretien" 
              className={`text-gray-800 hover:text-blue-600 transition ${activeLink === '/entretien' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => handleLinkClick('/entretien')}
            >
              Entretien
            </Link>
            <Link 
              to="/test" 
              className={`text-gray-800 hover:text-blue-600 transition ${activeLink === '/test' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => handleLinkClick('/test')}
            >
              Coder
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-800 hover:text-blue-600 transition ${activeLink === '/contact' ? 'text-blue-600 font-semibold' : ''}`}
              onClick={() => handleLinkClick('/contact')}
            >
              Contact
            </Link>
          </div>

          {/* Bouton CTA Desktop */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Démarrer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a 
                href="#" 
                className={`block py-2 text-gray-800 hover:text-blue-600 ${activeLink === '/accueil' ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => handleLinkClick('/accueil')}
              >
                Accueil
              </a>
              <a 
                href="#" 
                className={`block py-2 text-gray-800 hover:text-blue-600 ${activeLink === '/services' ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => handleLinkClick('/services')}
              >
                Services
              </a>
              <a 
                href="#" 
                className={`block py-2 text-gray-800 hover:text-blue-600 ${activeLink === '/solutions' ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => handleLinkClick('/solutions')}
              >
                Solutions
              </a>
              <a 
                href="#" 
                className={`block py-2 text-gray-800 hover:text-blue-600 ${activeLink === '/contact' ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Démarrer
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
