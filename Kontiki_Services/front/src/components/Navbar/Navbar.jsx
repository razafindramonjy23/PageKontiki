// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('/accueil');
//   const [scrolled, setScrolled] = useState(false);
//   // Dans une vraie application, cet état viendrait de votre système d'authentification
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setIsMenuOpen(false);
//   };

//   const navLinks = [
//     { path: '/accueil', label: 'Accueil' },
//     { path: '/services', label: 'Services' },
//     { path: '/A_propos', label: 'A propos de nous' },
//     { path: '/test', label: 'Rejoignez-nous' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   // Ajouter le lien admin seulement si l'utilisateur est admin
//   const allLinks = isAdmin
//     ? [...navLinks, { path: '/admin', label: 'Administration' }]
//     : navLinks;

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'
//       }`}>
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           {/* <div className="flex items-center">
//             <img
//               src="/api/placeholder/150/50"
//               alt="Kontiki logo"
//               className="w-auto h-12"
//             />
//           </div> */}
//           <div className="flex items-center">
//             <span className="font-sans text-3xl font-bold">
//               <span className="text-blue-900"><span className='text-4xl'>K</span>ONTIKI</span>
//               <span className="text-amber-400"> SERVICE</span>
//             </span>
//           </div>

//           {/* Menu Desktop */}
//           <div className="hidden space-x-6 md:flex">
//             {allLinks.map(({ path, label }) => (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`relative px-3 py-2 text-sm font-medium transition-colors
//                   ${activeLink === path
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-600'
//                   }
//                   after:content-[''] after:absolute after:left-0 after:bottom-0 
//                   after:h-0.5 after:bg-blue-600 after:transition-all
//                   ${activeLink === path
//                     ? 'after:w-full'
//                     : 'after:w-0 hover:after:w-full'
//                   }`}
//                 onClick={() => handleLinkClick(path)}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 text-gray-600 transition-colors rounded-lg hover:text-blue-600 hover:bg-blue-50"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
//             ? 'max-h-screen opacity-100 visible'
//             : 'max-h-0 opacity-0 invisible'
//           }`}>
//           <div className="py-2 space-y-1 bg-white rounded-b-lg shadow-lg">
//             {allLinks.map(({ path, label }) => (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`block px-4 py-3 text-sm font-medium transition-colors
//                   ${activeLink === path
//                     ? 'bg-blue-50 text-blue-600'
//                     : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
//                   }`}
//                 onClick={() => handleLinkClick(path)}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
    { path: '/test', label: 'Carrière' },
    { path: '/contact', label: 'Contact' },
  ];

  const allLinks = isAdmin
    ? [...navLinks, { path: '/admin', label: 'Administration' }]
    : navLinks;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-serif text-2xl tracking-wide sm:text-3xl">
              <span className="text-blue-900">KONTIKI</span>
              <span className="font-light text-amber-400"> SERVICE</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden space-x-8 font-semibold md:flex">
            {allLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-2 py-2 text-sm tracking-wider uppercase transition-colors duration-300
                  ${
                    activeLink === path
                      ? 'text-gray-800'
                      : 'text-gray-500 hover:text-gray-800'
                  }
                  before:content-[''] before:absolute before:left-0 before:bottom-0 
                  before:w-0 before:h-px before:bg-gray-800 before:transition-all before:duration-300
                  hover:before:w-full`}
                onClick={() => handleLinkClick(path)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Maintenant positionné à droite avec une marge */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-blue-600 hover:text-blue-800" />
              ) : (
                <Menu size={24} className="text-blue-600 hover:text-blue-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu avec largeur complète et sans défilement horizontal */}
        <div
          className={`absolute left-0 right-0 w-full md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="w-full py-4 space-y-2 shadow-lg bg-white/95">
            {allLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block w-full px-6 py-3 text-sm tracking-wider uppercase transition-colors
                  ${
                    activeLink === path
                      ? 'text-blue-600 bg-gray-50'
                      : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
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