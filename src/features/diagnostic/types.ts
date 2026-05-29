export type DiagnosticCategoryId =
  | 'digital-presence'
  | 'customer-service'
  | 'internal-processes'
  | 'digital-security'
  | 'data-backup'
  | 'automation-productivity'
  | 'customer-experience';

export type DiagnosticOptionScore = 0 | 1 | 2 | 3;

export type MaturityLevelId = 'initial' | 'basic' | 'intermediate' | 'advanced';

export type CategoryRecommendationLevel = 'low' | 'medium' | 'high';

export type DiagnosticCategory = {
  id: DiagnosticCategoryId;
  name: string;
  shortName: string;
  description: string;
};

export type DiagnosticOption = {
  id: string;
  label: string;
  description: string;
  score: DiagnosticOptionScore;
};

export type DiagnosticQuestion = {
  id: string;
  categoryId: DiagnosticCategoryId;
  title: string;
  options: DiagnosticOption[];
};

export type DiagnosticAnswers = Record<string, string>;

export type DiagnosticAnswer = {
  questionId: string;
  optionId: string;
  score: DiagnosticOptionScore;
};

export type MaturityLevel = {
  id: MaturityLevelId;
  name: string;
  minScore: number;
  maxScore: number;
  description: string;
};

export type CategoryRecommendation = {
  categoryId: DiagnosticCategoryId;
  title: string;
  recommendations: string[];
};

export type CategoryScore = {
  categoryId: DiagnosticCategoryId;
  categoryName: string;
  score: number;
  maxScore: number;
  percentage: number;
  recommendationLevel: CategoryRecommendationLevel;
};

export type DiagnosticResult = {
  totalScore: number;
  maxScore: number;
  percentage: number;
  answeredQuestions: number;
  totalQuestions: number;
  isComplete: boolean;
  maturityLevel: MaturityLevel;
  categoryScores: CategoryScore[];
  strengths: CategoryScore[];
  improvementPriorities: CategoryScore[];
};
