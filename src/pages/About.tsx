import React from 'react';
import { Heart, Award, Users, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About HeartCureAI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionizing heart health prediction through advanced artificial intelligence
              and machine learning technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At HeartCureAI, we're committed to making advanced heart health prediction
                accessible to everyone. Our mission is to leverage cutting-edge AI technology
                to prevent heart disease and save lives through early detection and
                intervention.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-blue-400" />,
                  title: "99.9% Accuracy",
                  description: "In clinical trials"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "50,000+ Users",
                  description: "Trust our platform"
                },
                {
                  icon: <Award className="w-8 h-8 text-blue-400" />,
                  title: "Certified",
                  description: "Medical-grade accuracy"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                  title: "Research-Backed",
                  description: "Published studies"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Meet the experts behind HeartCureAI - a diverse team of medical professionals,
              data scientists, and AI researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Medical Officer",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
              },
              {
                name: "Dr. Michael Roberts",
                role: "AI Research Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
              },
              {
                name: "Dr. Emily Thompson",
                role: "Head of Cardiology",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Technology</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Powered by state-of-the-art machine learning algorithms and trained on
              extensive medical datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Learning",
                description: "Neural networks trained on millions of patient records"
              },
              {
                title: "Real-time Analysis",
                description: "Instant processing of health data for immediate results"
              },
              {
                title: "Continuous Learning",
                description: "Models that improve with each new assessment"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};