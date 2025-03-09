import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-bold text-white">HeartCureAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Advanced AI-powered heart health assessment platform for early detection and prevention.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Research', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@heartcure.ai</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Health Street, Medical District</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in AI healthcare.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} HeartCureAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};