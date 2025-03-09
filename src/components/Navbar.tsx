import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/research', label: 'Research' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-gray-900/95 via-blue-900/20 to-gray-800/95 backdrop-blur-xl shadow-xl border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="relative">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU0MjdCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                {/* <Heart className="w-10 h-10 text-blue-500 relative z-10 group-hover:scale-110 transition-transform duration-300" /> */}
                <Heart className="w-10 h-10 text-blue-400 relative animate-beat" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                HeartCureAI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gray-800/50 ${
                    location.pathname === link.path
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
              <Link
                to="/assessment"
                className="ml-4 relative group overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10">Start Assessment</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 p-3 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-gray-300" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden relative z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-b from-gray-900/95 via-blue-900/20 to-gray-800/95 backdrop-blur-xl border-y border-gray-700/50 shadow-xl"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/assessment"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Assessment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};