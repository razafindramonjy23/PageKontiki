import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/accueil');
  const [scrolled, setScrolled] = useState(false);
  // Dans une vraie application, cet état viendrait de votre système d'authentification
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/accueil', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/A_propos', label: 'A propos de nous' },
    { path: '/test', label: 'Rejoignez-nous' },
    { path: '/contact', label: 'Contact' },
  ];

  // Ajouter le lien admin seulement si l'utilisateur est admin
  const allLinks = isAdmin 
    ? [...navLinks, { path: '/admin', label: 'Administration' }]
    : navLinks;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/api/placeholder/150/50"
              alt="Kontiki logo"
              className="w-auto h-12"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden space-x-6 md:flex">
            {allLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${activeLink === path 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:h-0.5 after:bg-blue-600 after:transition-all
                  ${activeLink === path 
                    ? 'after:w-full' 
                    : 'after:w-0 hover:after:w-full'
                  }`}
                onClick={() => handleLinkClick(path)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 transition-colors rounded-lg hover:text-blue-600 hover:bg-blue-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-2 space-y-1 bg-white rounded-b-lg shadow-lg">
            {allLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-3 text-sm font-medium transition-colors
                  ${activeLink === path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                onClick={() => handleLinkClick(path)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;