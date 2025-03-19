export interface PatientData {
  gender: 'male' | 'female';
  age: number;
  hypertension: boolean;
  heartDisease: boolean;
  maritalStatus: 'married' | 'single' | 'divorced';
  workType: 'private' | 'self-employed' | 'Govt_job';
  residenceType: 'urban' | 'rural';
  avgGlucoseLevel: number;
  bmi: number;
  smokingStatus: 'non-smoker' | 'formerly smoker' | 'currently';
  alcoholIntake: 'social drinking' | 'never' | 'rarely' | 'frequent drinker';
  physicalActivity: 'moderate' | 'low' | 'high';
  strokeHistory: boolean;
  familyHistory: boolean;
  dietaryHabits: 'vegan' | 'paleo' | 'pescatarian' | 'gluten-free' | 'non-vegetarian';
  bloodPressureLevel: number;
}

export interface PredictionResult {
  strokeRisk: number;
  riskLevel: 'low' | 'moderate' | 'high';
  recommendations: string[];
}