import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Activity, Scale, Cigarette, Running, FileHeart, Users } from 'lucide-react';
import type { PatientData } from '../types';

interface StepProps {
  onNext: (data: Partial<PatientData>) => void;
  onBack: () => void;
  currentData: Partial<PatientData>;
}

const AgeGenderStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [age, setAge] = useState(currentData.age?.toString() || '');
  const [gender, setGender] = useState(currentData.gender || '');
  const [errors, setErrors] = useState({ age: '', gender: '' });

  const validate = () => {
    const newErrors = { age: '', gender: '' };
    let isValid = true;

    if (!age) {
      newErrors.age = 'Age is required';
      isValid = false;
    } else if (parseInt(age) < 18 || parseInt(age) > 120) {
      newErrors.age = 'Age must be between 18 and 120';
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({ age: parseInt(age), gender: gender as 'male' | 'female' | 'other' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Basic Information</h2>
        <p className="text-gray-400 mt-2">Let's start with some basic details about you</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.age ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter your age"
          />
          {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
          <div className="grid grid-cols-3 gap-4">
            {['male', 'female', 'other'].map((option) => (
              <button
                key={option}
                onClick={() => setGender(option)}
                className={`p-4 rounded-lg border ${
                  gender === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const BloodPressureStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [systolic, setSystolic] = useState(currentData.systolicBP?.toString() || '');
  const [diastolic, setDiastolic] = useState(currentData.diastolicBP?.toString() || '');
  const [errors, setErrors] = useState({ systolic: '', diastolic: '' });

  const validate = () => {
    const newErrors = { systolic: '', diastolic: '' };
    let isValid = true;

    if (!systolic) {
      newErrors.systolic = 'Systolic pressure is required';
      isValid = false;
    } else if (parseInt(systolic) < 70 || parseInt(systolic) > 200) {
      newErrors.systolic = 'Systolic pressure should be between 70 and 200';
      isValid = false;
    }

    if (!diastolic) {
      newErrors.diastolic = 'Diastolic pressure is required';
      isValid = false;
    } else if (parseInt(diastolic) < 40 || parseInt(diastolic) > 130) {
      newErrors.diastolic = 'Diastolic pressure should be between 40 and 130';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        systolicBP: parseInt(systolic),
        diastolicBP: parseInt(diastolic)
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Activity className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Blood Pressure</h2>
        <p className="text-gray-400 mt-2">Please enter your blood pressure readings</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Systolic Pressure (mmHg)
          </label>
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.systolic ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter systolic pressure"
          />
          {errors.systolic && <p className="mt-1 text-sm text-red-500">{errors.systolic}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Diastolic Pressure (mmHg)
          </label>
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.diastolic ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter diastolic pressure"
          />
          {errors.diastolic && <p className="mt-1 text-sm text-red-500">{errors.diastolic}</p>}
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const BMILifestyleStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [bmi, setBMI] = useState(currentData.bmi?.toString() || '');
  const [smokingStatus, setSmokingStatus] = useState(currentData.smokingStatus || '');
  const [physicalActivity, setPhysicalActivity] = useState(currentData.physicalActivity || '');
  const [errors, setErrors] = useState({ bmi: '', smokingStatus: '', physicalActivity: '' });

  const validate = () => {
    const newErrors = { bmi: '', smokingStatus: '', physicalActivity: '' };
    let isValid = true;

    if (!bmi) {
      newErrors.bmi = 'BMI is required';
      isValid = false;
    } else if (parseFloat(bmi) < 10 || parseFloat(bmi) > 50) {
      newErrors.bmi = 'BMI should be between 10 and 50';
      isValid = false;
    }

    if (!smokingStatus) {
      newErrors.smokingStatus = 'Smoking status is required';
      isValid = false;
    }

    if (!physicalActivity) {
      newErrors.physicalActivity = 'Physical activity level is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        bmi: parseFloat(bmi),
        smokingStatus: smokingStatus as 'never' | 'former' | 'current',
        physicalActivity: physicalActivity as 'sedentary' | 'light' | 'moderate' | 'active'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Scale className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Lifestyle Information</h2>
        <p className="text-gray-400 mt-2">Tell us about your lifestyle and physical characteristics</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">BMI</label>
          <input
            type="number"
            step="0.1"
            value={bmi}
            onChange={(e) => setBMI(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.bmi ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter your BMI"
          />
          {errors.bmi && <p className="mt-1 text-sm text-red-500">{errors.bmi}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Smoking Status</label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'never', label: 'Never Smoked' },
              { value: 'former', label: 'Former Smoker' },
              { value: 'current', label: 'Current Smoker' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSmokingStatus(option.value)}
                className={`p-4 rounded-lg border ${
                  smokingStatus === option.value
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {errors.smokingStatus && (
            <p className="mt-1 text-sm text-red-500">{errors.smokingStatus}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Physical Activity Level
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'sedentary', label: 'Sedentary' },
              { value: 'light', label: 'Light Activity' },
              { value: 'moderate', label: 'Moderate Activity' },
              { value: 'active', label: 'Very Active' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setPhysicalActivity(option.value)}
                className={`p-4 rounded-lg border ${
                  physicalActivity === option.value
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {errors.physicalActivity && (
            <p className="mt-1 text-sm text-red-500">{errors.physicalActivity}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const MedicalHistoryStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [medicalConditions, setMedicalConditions] = useState<string[]>(
    currentData.medicalConditions || []
  );
  const [familyHistory, setFamilyHistory] = useState(currentData.familyHistory || false);
  const [errors, setErrors] = useState({ medicalConditions: '' });

  const medicalConditionsList = [
    'Hypertension',
    'Diabetes',
    'High Cholesterol',
    'Heart Disease',
    'Obesity',
    'Previous Stroke'
  ];

  const toggleCondition = (condition: string) => {
    setMedicalConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const validate = () => {
    const newErrors = { medicalConditions: '' };
    let isValid = true;

    // Medical conditions are optional, so no validation needed
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        medicalConditions,
        familyHistory
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <FileHeart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Medical History</h2>
        <p className="text-gray-400 mt-2">Please tell us about your medical history</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Select any medical conditions you have:
          </label>
          <div className="grid grid-cols-2 gap-4">
            {medicalConditionsList.map((condition) => (
              <button
                key={condition}
                onClick={() => toggleCondition(condition)}
                className={`p-4 rounded-lg border ${
                  medicalConditions.includes(condition)
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all text-left`}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => setFamilyHistory(!familyHistory)}
            className={`w-full p-4 rounded-lg border ${
              familyHistory
                ? 'border-blue-500 bg-blue-500/20 text-white'
                : 'border-gray-700 bg-gray-800 text-gray-400'
            } hover:border-blue-500/50 transition-all text-left`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Family History of Heart Disease</span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Complete Assessment <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const steps = [
  { id: 'basic', title: 'Basic Info', component: AgeGenderStep },
  { id: 'bp', title: 'Blood Pressure', component: BloodPressureStep },
  { id: 'lifestyle', title: 'Lifestyle', component: BMILifestyleStep },
  { id: 'medical', title: 'Medical History', component: MedicalHistoryStep }
];

export const Assessment = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<Partial<PatientData>>({});

  const handleNext = (stepData: Partial<PatientData>) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Submit form data to the AI model
      console.log('Final form data:', updatedData);
      // Here you would typically make an API call to your ML model
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStepIndex].component;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center ${
                    index < steps.length - 1 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStepIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        index < currentStepIndex
                          ? 'bg-blue-600'
                          : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between px-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-sm ${
                    index <= currentStepIndex ? 'text-blue-400' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <CurrentStepComponent
              key={steps[currentStepIndex].id}
              onNext={handleNext}
              onBack={handleBack}
              currentData={formData}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};