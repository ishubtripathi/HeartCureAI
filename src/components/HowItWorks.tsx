import React from 'react';
import { ClipboardCheck, Brain, FileText, Heart } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How HeartCureAI Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four simple steps to get your comprehensive heart health assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ClipboardCheck className="w-12 h-12 text-blue-400" />,
              title: "Complete Assessment",
              description: "Fill out our comprehensive health questionnaire"
            },
            {
              icon: <Brain className="w-12 h-12 text-blue-400" />,
              title: "AI Analysis",
              description: "Our AI processes your data using advanced algorithms"
            },
            {
              icon: <Heart className="w-12 h-12 text-blue-400" />,
              title: "Risk Evaluation",
              description: "Receive your personalized risk assessment"
            },
            {
              icon: <FileText className="w-12 h-12 text-blue-400" />,
              title: "Get Recommendations",
              description: "Review detailed health recommendations"
            }
          ].map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 border-t-2 border-dashed border-blue-500/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};