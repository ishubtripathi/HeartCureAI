import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { AssessmentForm } from './AssessmentForm';
import { RiskDisplay } from './RiskDisplay';
import type { RiskAssessment } from '../types';

interface AssessmentSectionProps {
  onBack: () => void;
  onAssessmentComplete: (assessment: RiskAssessment) => void;
  assessment: RiskAssessment | null;
}

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  onBack,
  onAssessmentComplete,
  assessment
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="space-y-12">
          <AssessmentForm onSubmit={onAssessmentComplete} />
          {assessment && <RiskDisplay assessment={assessment} />}
        </div>
      </div>
    </div>
  );
};