// import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, CheckCircle, Lock, Clock } from 'lucide-react';

interface HeroProps {
  onStartAssessment: () => void;
}

export const Hero = ({ onStartAssessment }: HeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU0MjdCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <motion.div
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
                {/* <Heart className="w-12 h-12 text-blue-400 relative animate-beat" /> */}
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Predict & Prevent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Heart Disease
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Advanced AI-powered heart health assessment platform that helps you identify risks early and take control of your cardiovascular health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {[
                "AI-powered risk assessment with 99.9% accuracy",
                "Personalized health recommendations",
                "HIPAA-compliant secure data handling",
                "Real-time monitoring and alerts"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={onStartAssessment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                Start Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-gray-700 hover:border-blue-500/50 flex items-center gap-2"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-8 pt-8 border-t border-gray-800"
            >
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    src={src}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-400">
                Trusted by <span className="text-white font-semibold">50,000+</span> healthcare professionals
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                alt="Medical Dashboard"
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-12 top-1/4 transform -translate-y-1/2"
              >
                <div className="bg-gray-800/90 backdrop-blur-xl p-4 rounded-xl border border-gray-700/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Activity className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm text-gray-400">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-8 bottom-1/4"
              >
                <div className="bg-gray-800/90 backdrop-blur-xl p-4 rounded-xl border border-gray-700/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-0 transform -translate-y-1/2"
              >
                <div className="bg-gray-800/90 backdrop-blur-xl p-4 rounded-xl border border-gray-700/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Lock className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-lg font-bold">HIPAA Compliant</div>
                      <div className="text-sm text-gray-400">Secure & Protected</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ delay: 0.4 }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};