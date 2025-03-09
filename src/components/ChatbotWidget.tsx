import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm HeartCare Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. I'm here to help with any questions about heart health and our assessment process.",
        isBot: true
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100%-2rem)] sm:w-[400px] h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700/50 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg" />
                    <MessageCircle className="w-6 h-6 text-blue-400 relative" />
                  </div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    HeartCure Assistant
                  </h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-gray-800/80 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                />
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-2 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-4 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
};