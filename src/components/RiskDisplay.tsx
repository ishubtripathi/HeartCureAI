import React from 'react';
import { AlertTriangle, CheckCircle, Heart } from 'lucide-react';
import type { RiskAssessment } from '../types';

interface RiskDisplayProps {
  assessment: RiskAssessment;
}

export const RiskDisplay: React.FC<RiskDisplayProps> = ({ assessment }) => {
  const { riskPercentage, riskLevel, recommendations } = assessment;

  const getRiskColor = () => {
    switch (riskLevel) {
      case 'low':
        return 'text-green-400';
      case 'moderate':
        return 'text-yellow-400';
      case 'high':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getRiskIcon = () => {
    switch (riskLevel) {
      case 'low':
        return <CheckCircle className="w-12 h-12 text-green-400" />;
      case 'moderate':
        return <AlertTriangle className="w-12 h-12 text-yellow-400" />;
      case 'high':
        return <Heart className="w-12 h-12 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-xl shadow-xl">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {getRiskIcon()}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Risk Assessment Results</h2>
        <div className="text-4xl font-bold mb-2">
          <span className={getRiskColor()}>{riskPercentage}%</span>
        </div>
        <p className={`text-xl ${getRiskColor()} capitalize`}>
          {riskLevel} Risk
        </p>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
        <ul className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all">
          Download Report
        </button>
      </div>
    </div>
  );
};