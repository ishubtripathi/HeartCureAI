export interface PatientData {
  age: number;
  gender: 'male' | 'female' | 'other';
  systolicBP: number;
  diastolicBP: number;
  bmi: number;
  smokingStatus: 'never' | 'former' | 'current';
  physicalActivity: 'sedentary' | 'light' | 'moderate' | 'active';
  medicalConditions: string[];
  familyHistory: boolean;
}

export interface RiskAssessment {
  riskPercentage: number;
  riskLevel: 'low' | 'moderate' | 'high';
  recommendations: string[];
}