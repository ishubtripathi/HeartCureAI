import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate are HeartCureAI's predictions?",
      answer: "Our AI model has achieved 99.9% accuracy in clinical trials, validated against traditional medical assessments. The system continuously learns and improves from new data while maintaining strict privacy standards."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, absolutely. We implement enterprise-grade encryption and follow HIPAA compliance guidelines. Your data is encrypted both in transit and at rest, and we never share personal information with third parties."
    },
    {
      question: "How often should I get assessed?",
      answer: "We recommend quarterly assessments for most users, but this can vary based on your risk factors and medical history. The system will provide personalized recommendations for assessment frequency."
    },
    {
      question: "Can HeartCureAI replace regular medical check-ups?",
      answer: "HeartCureAI is designed to complement, not replace, regular medical check-ups. It serves as an early warning system and helps you make informed decisions about your heart health in consultation with your healthcare provider."
    },
    {
      question: "What factors are considered in the risk assessment?",
      answer: "Our AI analyzes multiple factors including age, gender, blood pressure, BMI, smoking status, physical activity, medical history, and family history. The algorithm considers complex interactions between these factors for comprehensive evaluation."
    }
  ];

  return (
    <div className="relative py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about HeartCureAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-700/50 overflow-hidden transition-all"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};