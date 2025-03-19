import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Activity, Briefcase, FileHeart, FileWarning as Running } from 'lucide-react';
import type { PatientData, PredictionResult } from '../types';

interface StepProps {
  onNext: (data: Partial<PatientData>) => void;
  onBack: () => void;
  currentData: Partial<PatientData>;
}

const BasicInfoStep: React.FC<StepProps> = ({ onNext, currentData }) => {
  const [age, setAge] = useState(currentData.age?.toString() || '');
  const [gender, setGender] = useState(currentData.gender || '');
  const [maritalStatus, setMaritalStatus] = useState(currentData.maritalStatus || '');
  const [errors, setErrors] = useState({ age: '', gender: '', maritalStatus: '' });

  const validate = () => {
    const newErrors = { age: '', gender: '', maritalStatus: '' };
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

    if (!maritalStatus) {
      newErrors.maritalStatus = 'Marital status is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        age: parseInt(age),
        gender: gender as 'male' | 'female',
        maritalStatus: maritalStatus as PatientData['maritalStatus']
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
          <div className="grid grid-cols-2 gap-4">
            {['male', 'female'].map((option) => (
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

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Marital Status</label>
          <div className="grid grid-cols-3 gap-4">
            {['married', 'single', 'divorced'].map((option) => (
              <button
                key={option}
                onClick={() => setMaritalStatus(option)}
                className={`p-4 rounded-lg border ${
                  maritalStatus === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.maritalStatus && <p className="mt-1 text-sm text-red-500">{errors.maritalStatus}</p>}
        </div>
      </div>

      <div className="flex justify-end pt-8">
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

const WorkResidenceStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [workType, setWorkType] = useState(currentData.workType || '');
  const [residenceType, setResidenceType] = useState(currentData.residenceType || '');
  const [errors, setErrors] = useState({ workType: '', residenceType: '' });

  const validate = () => {
    const newErrors = { workType: '', residenceType: '' };
    let isValid = true;

    if (!workType) {
      newErrors.workType = 'Work type is required';
      isValid = false;
    }

    if (!residenceType) {
      newErrors.residenceType = 'Residence type is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        workType: workType as PatientData['workType'],
        residenceType: residenceType as 'urban' | 'rural'
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
        <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Work & Residence</h2>
        <p className="text-gray-400 mt-2">Tell us about your work and living situation</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Work Type</label>
          <div className="grid grid-cols-1 gap-4">
            {['private', 'self-employed', 'Govt_job'].map((option) => (
              <button
                key={option}
                onClick={() => setWorkType(option)}
                className={`p-4 rounded-lg border ${
                  workType === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1).replace('_', ' ')}
              </button>
            ))}
          </div>
          {errors.workType && <p className="mt-1 text-sm text-red-500">{errors.workType}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Residence Type</label>
          <div className="grid grid-cols-2 gap-4">
            {['urban', 'rural'].map((option) => (
              <button
                key={option}
                onClick={() => setResidenceType(option)}
                className={`p-4 rounded-lg border ${
                  residenceType === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.residenceType && <p className="mt-1 text-sm text-red-500">{errors.residenceType}</p>}
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

const HealthMetricsStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [avgGlucoseLevel, setAvgGlucoseLevel] = useState(currentData.avgGlucoseLevel?.toString() || '');
  const [bmi, setBMI] = useState(currentData.bmi?.toString() || '');
  const [bloodPressureLevel, setBloodPressureLevel] = useState(currentData.bloodPressureLevel?.toString() || '');
  const [errors, setErrors] = useState({ avgGlucoseLevel: '', bmi: '', bloodPressureLevel: '' });

  const validate = () => {
    const newErrors = { avgGlucoseLevel: '', bmi: '', bloodPressureLevel: '' };
    let isValid = true;

    if (!avgGlucoseLevel) {
      newErrors.avgGlucoseLevel = 'Average glucose level is required';
      isValid = false;
    } else if (parseFloat(avgGlucoseLevel) < 50 || parseFloat(avgGlucoseLevel) > 300) {
      newErrors.avgGlucoseLevel = 'Average glucose level should be between 50 and 300';
      isValid = false;
    }

    if (!bmi) {
      newErrors.bmi = 'BMI is required';
      isValid = false;
    } else if (parseFloat(bmi) < 10 || parseFloat(bmi) > 50) {
      newErrors.bmi = 'BMI should be between 10 and 50';
      isValid = false;
    }

    if (!bloodPressureLevel) {
      newErrors.bloodPressureLevel = 'Blood pressure level is required';
      isValid = false;
    } else if (parseFloat(bloodPressureLevel) < 70 || parseFloat(bloodPressureLevel) > 200) {
      newErrors.bloodPressureLevel = 'Blood pressure level should be between 70 and 200';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        avgGlucoseLevel: parseFloat(avgGlucoseLevel),
        bmi: parseFloat(bmi),
        bloodPressureLevel: parseFloat(bloodPressureLevel)
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
        <h2 className="text-2xl font-bold text-white">Health Metrics</h2>
        <p className="text-gray-400 mt-2">Please provide your health measurements</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Average Glucose Level (mg/dL)
          </label>
          <input
            type="number"
            step="0.1"
            value={avgGlucoseLevel}
            onChange={(e) => setAvgGlucoseLevel(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.avgGlucoseLevel ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter average glucose level"
          />
          {errors.avgGlucoseLevel && (
            <p className="mt-1 text-sm text-red-500">{errors.avgGlucoseLevel}</p>
          )}
        </div>

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
          <label className="block text-sm font-medium text-gray-300 mb-2">Blood Pressure Level (systolic)</label>
          <input
            type="number"
            step="1"
            value={bloodPressureLevel}
            onChange={(e) => setBloodPressureLevel(e.target.value)}
            className={`w-full bg-gray-800 border ${
              errors.bloodPressureLevel ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white`}
            placeholder="Enter your blood pressure level"
          />
          {errors.bloodPressureLevel && (
            <p className="mt-1 text-sm text-red-500">{errors.bloodPressureLevel}</p>
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

const LifestyleStep: React.FC<StepProps> = ({ onNext, onBack, currentData }) => {
  const [smokingStatus, setSmokingStatus] = useState(currentData.smokingStatus || '');
  const [alcoholIntake, setAlcoholIntake] = useState(currentData.alcoholIntake || '');
  const [physicalActivity, setPhysicalActivity] = useState(currentData.physicalActivity || '');
  const [dietaryHabits, setDietaryHabits] = useState(currentData.dietaryHabits || '');
  const [errors, setErrors] = useState({
    smokingStatus: '',
    alcoholIntake: '',
    physicalActivity: '',
    dietaryHabits: ''
  });

  const validate = () => {
    const newErrors = {
      smokingStatus: '',
      alcoholIntake: '',
      physicalActivity: '',
      dietaryHabits: ''
    };
    let isValid = true;

    if (!smokingStatus) {
      newErrors.smokingStatus = 'Smoking status is required';
      isValid = false;
    }
    if (!alcoholIntake) {
      newErrors.alcoholIntake = 'Alcohol intake is required';
      isValid = false;
    }
    if (!physicalActivity) {
      newErrors.physicalActivity = 'Physical activity level is required';
      isValid = false;
    }
    if (!dietaryHabits) {
      newErrors.dietaryHabits = 'Dietary habits are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      onNext({
        smokingStatus: smokingStatus as PatientData['smokingStatus'],
        alcoholIntake: alcoholIntake as PatientData['alcoholIntake'],
        physicalActivity: physicalActivity as PatientData['physicalActivity'],
        dietaryHabits: dietaryHabits as PatientData['dietaryHabits']
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
        <Running className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Lifestyle Habits</h2>
        <p className="text-gray-400 mt-2">Tell us about your lifestyle choices</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Smoking Status</label>
          <div className="grid grid-cols-3 gap-4">
            {['non-smoker', 'formerly smoker', 'currently'].map((option) => (
              <button
                key={option}
                onClick={() => setSmokingStatus(option)}
                className={`p-4 rounded-lg border ${
                  smokingStatus === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.smokingStatus && (
            <p className="mt-1 text-sm text-red-500">{errors.smokingStatus}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Alcohol Intake</label>
          <div className="grid grid-cols-2 gap-4">
            {['never', 'rarely', 'social drinking', 'frequent drinker'].map((option) => (
              <button
                key={option}
                onClick={() => setAlcoholIntake(option)}
                className={`p-4 rounded-lg border ${
                  alcoholIntake === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.alcoholIntake && (
            <p className="mt-1 text-sm text-red-500">{errors.alcoholIntake}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Physical Activity Level</label>
          <div className="grid grid-cols-3 gap-4">
            {['low', 'moderate', 'high'].map((option) => (
              <button
                key={option}
                onClick={() => setPhysicalActivity(option)}
                className={`p-4 rounded-lg border ${
                  physicalActivity === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.physicalActivity && (
            <p className="mt-1 text-sm text-red-500">{errors.physicalActivity}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Dietary Habits</label>
          <div className="grid grid-cols-2 gap-4">
            {['vegan', 'paleo', 'pescatarian', 'gluten-free', 'non-vegetarian'].map((option) => (
              <button
                key={option}
                onClick={() => setDietaryHabits(option)}
                className={`p-4 rounded-lg border ${
                  dietaryHabits === option
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-700 bg-gray-800 text-gray-400'
                } hover:border-blue-500/50 transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          {errors.dietaryHabits && (
            <p className="mt-1 text-sm text-red-500">{errors.dietaryHabits}</p>
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
  const [hypertension, setHypertension] = useState(currentData.hypertension || false);
  const [heartDisease, setHeartDisease] = useState(currentData.heartDisease || false);
  const [strokeHistory, setStrokeHistory] = useState(currentData.strokeHistory || false);
  const [familyHistory, setFamilyHistory] = useState(currentData.familyHistory || false);

  const handleNext = () => {
    onNext({
      hypertension,
      heartDisease,
      strokeHistory,
      familyHistory
    });
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

      <div className="space-y-4">
        <button
          onClick={() => setHypertension(!hypertension)}
          className={`w-full p-4 rounded-lg border ${
            hypertension
              ? 'border-blue-500 bg-blue-500/20 text-white'
              : 'border-gray-700 bg-gray-800 text-gray-400'
          } hover:border-blue-500/50 transition-all text-left`}
        >
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span>Hypertension</span>
          </div>
        </button>

        <button
          onClick={() => setHeartDisease(!heartDisease)}
          className={`w-full p-4 rounded-lg border ${
            heartDisease
              ? 'border-blue-500 bg-blue-500/20 text-white'
              : 'border-gray-700 bg-gray-800 text-gray-400'
          } hover:border-blue-500/50 transition-all text-left`}
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>Heart Disease</span>
          </div>
        </button>

        <button
          onClick={() => setStrokeHistory(!strokeHistory)}
          className={`w-full p-4 rounded-lg border ${
            strokeHistory
              ? 'border-blue-500 bg-blue-500/20 text-white'
              : 'border-gray-700 bg-gray-800 text-gray-400'
          } hover:border-blue-500/50 transition-all text-left`}
        >
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span>Previous Stroke History</span>
          </div>
        </button>

        <button
          onClick={() => setFamilyHistory(!familyHistory)}
          className={`w-full p-4 rounded-lg border ${
            familyHistory
              ? 'border-blue-500 bg-blue-500/20 text-white'
              : 'border-gray-700 bg-gray-800 text-gray-400'
          } hover:border-blue-500/50 transition-all text-left`}
        >
          <div className="flex items-center gap-2">
            <FileHeart className="w-5 h-5" />
            <span>Family History of Stroke</span>
          </div>
        </button>
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
          Get Results <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const ResultsPreview: React.FC<{ data: PatientData }> = ({ data }) => {
  // This is a mock prediction - replace with actual ML model prediction
  const calculateRisk = (data: PatientData): PredictionResult => {
    let riskScore = 0;

    // Age factor
    if (data.age > 65) riskScore += 2;
    else if (data.age > 45) riskScore += 1;

    // Medical conditions
    if (data.hypertension) riskScore += 2;
    if (data.heartDisease) riskScore += 2;
    if (data.strokeHistory) riskScore += 3;
    if (data.familyHistory) riskScore += 1;

    // Lifestyle factors
    if (data.smokingStatus === 'currently') riskScore += 2;
    if (data.alcoholIntake === 'frequent drinker') riskScore += 1;
    if (data.physicalActivity === 'low') riskScore += 1;

    // Health metrics
    if (data.bmi > 30) riskScore += 1;
    if (data.avgGlucoseLevel > 200) riskScore += 2;
    if (data.bloodPressureLevel > 140) riskScore += 2;

    const maxScore = 19;
    const normalizedRisk = riskScore / maxScore;

    return {
      strokeRisk: normalizedRisk,
      riskLevel: normalizedRisk > 0.6 ? 'high' : normalizedRisk > 0.3 ? 'moderate' : 'low',
      recommendations: [
        'Maintain regular blood pressure monitoring',
        'Follow a balanced, heart-healthy diet',
        'Engage in regular physical activity',
        'Schedule regular check-ups with your healthcare provider',
        data.smokingStatus === 'currently' ? 'Consider smoking cessation programs' : '',
        data.alcoholIntake === 'frequent drinker' ? 'Reduce alcohol consumption' : '',
        data.bmi > 30 ? 'Work with a healthcare provider on weight management' : '',
        data.physicalActivity === 'low' ? 'Increase daily physical activity levels' : '',
      ].filter(Boolean)
    };
  };

  const prediction = calculateRisk(data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Your Results</h2>
        <p className="text-gray-400 mt-2">Based on your provided information</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300">Stroke Risk:</span>
            <span className="text-white font-semibold">{(prediction.strokeRisk * 100).toFixed(1)}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Risk Level:</span>
            <span className={`font-semibold ${
              prediction.riskLevel === 'high' ? 'text-red-400' :
              prediction.riskLevel === 'moderate' ? 'text-yellow-400' :
              'text-green-400'
            }`}>
              {prediction.riskLevel.charAt(0).toUpperCase() + prediction.riskLevel.slice(1)}
            </span>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Key Risk Factors</h3>
          <ul className="space-y-2">
            {data.hypertension && (
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-400">•</span>
                Hypertension
              </li>
            )}
            {data.heartDisease && (
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-400">•</span>
                Heart Disease
              </li>
            )}
            {data.strokeHistory && (
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-400">•</span>
                Previous Stroke History
              </li>
            )}
            {data.familyHistory && (
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400">•</span>
                Family History of Stroke
              </li>
            )}
            {data.smokingStatus === 'currently' && (
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400">•</span>
                Current Smoker
              </li>
            )}
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
          <ul className="space-y-2">
            {prediction.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-blue-400">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Important Note</h3>
          <p className="text-gray-300">
            This assessment is for informational purposes only and should not be considered as medical advice.
            Please consult with a healthcare professional for proper medical evaluation and advice.
            If you experience any symptoms of a stroke, seek immediate medical attention.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const steps = [
  { id: 'basic', title: 'Basic Info', component: BasicInfoStep },
  { id: 'work', title: 'Work & Home', component: WorkResidenceStep },
  { id: 'health', title: 'Health Metrics', component: HealthMetricsStep },
  { id: 'lifestyle', title: 'Lifestyle', component: LifestyleStep },
  { id: 'medical', title: 'Medical History', component: MedicalHistoryStep }
];

export const Assessment = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<Partial<PatientData>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (stepData: Partial<PatientData>) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
      // Here you would typically make an API call to your ML model
      console.log('Final form data:', updatedData);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStepIndex].component;

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
          {!isComplete && (
            <>
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
            </>
          )}

          {isComplete && <ResultsPreview data={formData as PatientData} />}
        </div>
      </div>
    </div>
  );
};