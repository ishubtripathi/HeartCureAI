import React from 'react';
import { Brain, Shield, Heart, Activity, Clock, BarChart as ChartBar } from 'lucide-react';

export const Features = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Features for Your Heart Health
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technology combined with medical expertise to provide you with the most accurate heart health assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-12 h-12 text-blue-400" />,
              title: "AI-Powered Analysis",
              description: "Advanced machine learning algorithms analyze multiple risk factors simultaneously"
            },
            {
              icon: <Shield className="w-12 h-12 text-blue-400" />,
              title: "Data Security",
              description: "Enterprise-grade encryption and HIPAA-compliant data handling"
            },
            {
              icon: <Heart className="w-12 h-12 text-blue-400" />,
              title: "Real-time Monitoring",
              description: "Continuous assessment of your heart health metrics"
            },
            {
              icon: <Activity className="w-12 h-12 text-blue-400" />,
              title: "Personalized Insights",
              description: "Tailored recommendations based on your unique health profile"
            },
            {
              icon: <Clock className="w-12 h-12 text-blue-400" />,
              title: "Early Detection",
              description: "Identify potential risks before they become serious issues"
            },
            {
              icon: <ChartBar className="w-12 h-12 text-blue-400" />,
              title: "Progress Tracking",
              description: "Monitor your improvement over time with detailed analytics"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};