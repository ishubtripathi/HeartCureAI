import React, { useState } from 'react';
import { Activity, Heart, User, Scale, Cigarette, FileWarning as Running, FileHeart, Users } from 'lucide-react';

const medicalConditionsList = [
  'Hypertension',
  'Diabetes',
  'High Cholesterol',
  'Heart Disease',
  'Obesity',
  'Previous Stroke',
];

export const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    systolicBP: '',
    diastolicBP: '',
    bmi: '',
    smokingStatus: '',
    physicalActivity: '',
    medicalConditions: [] as string[],
    familyHistory: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleMedicalConditionToggle = (condition: string) => {
    setFormData(prev => ({
      ...prev,
      medicalConditions: prev.medicalConditions.includes(condition)
        ? prev.medicalConditions.filter(c => c !== condition)
        : [...prev.medicalConditions, condition],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Heart className="text-blue-400" />
        Health Assessment Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" /> Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Systolic BP
            </label>
            <input
              type="number"
              value={formData.systolicBP}
              onChange={(e) => setFormData(prev => ({ ...prev, systolicBP: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Systolic blood pressure"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Diastolic BP
            </label>
            <input
              type="number"
              value={formData.diastolicBP}
              onChange={(e) => setFormData(prev => ({ ...prev, diastolicBP: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Diastolic blood pressure"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4" /> BMI
            </label>
            <input
              type="number"
              value={formData.bmi}
              onChange={(e) => setFormData(prev => ({ ...prev, bmi: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Body Mass Index"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Cigarette className="w-4 h-4" /> Smoking Status
            </label>
            <select
              value={formData.smokingStatus}
              onChange={(e) => setFormData(prev => ({ ...prev, smokingStatus: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="">Select smoking status</option>
              <option value="never">Never Smoked</option>
              <option value="former">Former Smoker</option>
              <option value="current">Current Smoker</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Running className="w-4 h-4" /> Physical Activity
            </label>
            <select
              value={formData.physicalActivity}
              onChange={(e) => setFormData(prev => ({ ...prev, physicalActivity: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="">Select activity level</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
            <FileHeart className="w-4 h-4" /> Medical Conditions
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {medicalConditionsList.map((condition) => (
              <label key={condition} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.medicalConditions.includes(condition)}
                  onChange={() => handleMedicalConditionToggle(condition)}
                  className="form-checkbox h-4 w-4 text-blue-400 rounded bg-gray-700 border-gray-600"
                />
                <span className="text-gray-300">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.familyHistory}
              onChange={(e) => setFormData(prev => ({ ...prev, familyHistory: e.target.checked }))}
              className="form-checkbox h-4 w-4 text-blue-400 rounded bg-gray-700 border-gray-600"
            />
            <span className="text-gray-300 flex items-center gap-2">
              <Users className="w-4 h-4" /> Family History of Heart Disease
            </span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Calculate Risk
          </button>
        </div>
      </form>
    </div>
  );
};