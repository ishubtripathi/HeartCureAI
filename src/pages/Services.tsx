import React from 'react';
import { Heart, Activity, Brain, Shield, FileHeart, Users } from 'lucide-react';

export const Services = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive heart health solutions powered by artificial intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-blue-400" />,
                title: "Risk Assessment",
                description: "AI-powered heart disease risk prediction with 99.9% accuracy",
                features: [
                  "Comprehensive health analysis",
                  "Real-time results",
                  "Personalized recommendations"
                ]
              },
              {
                icon: <Activity className="w-12 h-12 text-blue-400" />,
                title: "Continuous Monitoring",
                description: "24/7 heart health monitoring and early warning system",
                features: [
                  "Real-time vital tracking",
                  "Anomaly detection",
                  "Emergency alerts"
                ]
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-400" />,
                title: "AI Consultation",
                description: "Virtual consultations powered by advanced AI",
                features: [
                  "24/7 availability",
                  "Instant responses",
                  "Medical knowledge base"
                ]
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                title: "Prevention Planning",
                description: "Customized prevention strategies and lifestyle recommendations",
                features: [
                  "Personalized plans",
                  "Progress tracking",
                  "Lifestyle optimization"
                ]
              },
              {
                icon: <FileHeart className="w-12 h-12 text-blue-400" />,
                title: "Health Reports",
                description: "Detailed health reports and analytics",
                features: [
                  "Comprehensive analysis",
                  "Trend tracking",
                  "Doctor-ready reports"
                ]
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Family History Analysis",
                description: "Multi-generational health risk assessment",
                features: [
                  "Genetic risk factors",
                  "Family patterns",
                  "Preventive guidance"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Pricing Plans</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose the perfect plan for your health monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                features: [
                  "Basic risk assessment",
                  "Limited health reports",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$29/month",
                features: [
                  "Advanced risk assessment",
                  "24/7 monitoring",
                  "Priority support",
                  "Detailed health reports",
                  "Family history analysis"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "All Professional features",
                  "Custom integration",
                  "Dedicated support",
                  "API access",
                  "Multiple users"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {plan.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <Shield className="w-4 h-4 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};