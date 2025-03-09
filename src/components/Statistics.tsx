import React, { useEffect, useRef, useState } from 'react';
import { Activity } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Users Protected",
      detail: "Trusted by healthcare providers worldwide"
    },
    {
      number: 99.9,
      suffix: "%",
      label: "Accuracy Rate",
      detail: "Based on clinical validation studies"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Monitoring",
      detail: "Continuous health assessment"
    },
    {
      number: 15,
      suffix: "+",
      label: "Risk Factors",
      detail: "Comprehensive analysis"
    }
  ];

  return (
    <div className="relative py-20 bg-gray-900" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-gradient-to-br from-gray-800/30 via-blue-900/10 to-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Activity className="w-8 h-8 text-blue-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                  separator=","
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};