import React from 'react';
import { BookOpen, FileText, Users, Award } from 'lucide-react';

export const Research = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research & Publications
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring the frontiers of AI in cardiovascular health prediction
            </p>
          </div>
        </div>
      </div>

      {/* Latest Publications */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Latest Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Early Detection of Cardiovascular Disease",
                authors: "Dr. Sarah Chen, et al.",
                journal: "Journal of Medical AI",
                date: "2025",
                citation: "Chen, S., et al. (2025). AI-Driven Early Detection..."
              },
              {
                title: "Machine Learning in Preventive Cardiology",
                authors: "Dr. Michael Roberts, et al.",
                journal: "Artificial Intelligence in Medicine",
                date: "2024",
                citation: "Roberts, M., et al. (2024). Machine Learning..."
              },
              {
                title: "Deep Learning for Heart Disease Risk Prediction",
                authors: "Dr. Emily Thompson, et al.",
                journal: "Digital Health Research",
                date: "2024",
                citation: "Thompson, E., et al. (2024). Deep Learning..."
              }
            ].map((publication, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50"
              >
                <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {publication.title}
                </h3>
                <p className="text-gray-400 mb-4">{publication.authors}</p>
                <div className="text-sm text-gray-500">
                  <p>{publication.journal}</p>
                  <p>{publication.date}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">{publication.citation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Stats */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12 text-blue-400" />,
                number: "50+",
                label: "Published Papers"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                number: "100,000+",
                label: "Study Participants"
              },
              {
                icon: <Award className="w-12 h-12 text-blue-400" />,
                number: "25+",
                label: "Research Awards"
              },
              {
                icon: <BookOpen className="w-12 h-12 text-blue-400" />,
                number: "10+",
                label: "Clinical Trials"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Research */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Current Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Neural Networks for Risk Prediction",
                description: "Developing next-generation neural network architectures for more accurate cardiovascular risk prediction.",
                status: "Ongoing",
                completion: "75%"
              },
              {
                title: "Genetic Markers in AI Models",
                description: "Incorporating genetic risk factors into our AI models for personalized risk assessment.",
                status: "Ongoing",
                completion: "60%"
              },
              {
                title: "Real-time Monitoring Algorithms",
                description: "Creating advanced algorithms for continuous heart health monitoring and early warning systems.",
                status: "Ongoing",
                completion: "85%"
              },
              {
                title: "Population Health Studies",
                description: "Large-scale studies on population-wide heart health trends and risk factors.",
                status: "Ongoing",
                completion: "40%"
              }
            ].map((research, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {research.title}
                </h3>
                <p className="text-gray-400 mb-6">{research.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status: {research.status}</span>
                    <span className="text-blue-400">{research.completion}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: research.completion }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};