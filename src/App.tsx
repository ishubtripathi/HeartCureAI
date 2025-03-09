import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Activity, Shield } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Research } from './pages/Research';
import { Contact } from './pages/Contact';
import { Assessment } from './pages/Assessment';
import { ChatbotWidget } from './components/ChatbotWidget';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"
          >
            <div className="relative flex flex-col items-center">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU0MjdCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
              
              {/* Main Icon Container */}
              <div className="relative w-24 h-24 mb-8">
                {/* Outer Glow */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"
                />

                {/* Middle Glow */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.2 }}
                  animate={{ 
                    scale: [0.8, 1, 0.8],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl"
                />

                {/* Heart Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  <Heart className="w-16 h-16 text-blue-400" />
                </motion.div>
              </div>

              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  HeartCureAI
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Activity className="w-4 h-4" />
                  </motion.div>
                  <span>Loading...</span>
                </div>
              </motion.div>

              {/* Loading Progress */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                className="mt-8 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20 rounded-full"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gray-900 text-white"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/assessment" element={<Assessment />} />
            </Routes>
            <ChatbotWidget />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;