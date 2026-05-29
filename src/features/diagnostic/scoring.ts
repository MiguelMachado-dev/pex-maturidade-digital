import { categories } from '../../data/categories';
import { questions } from '../../data/questions';
import {
  categoryRecommendations,
  maturityLevels,
} from '../../data/recommendations';
import type {
  CategoryRecommendation,
  CategoryRecommendationLevel,
  CategoryScore,
  DiagnosticAnswers,
  DiagnosticCategoryId,
  DiagnosticResult,
  MaturityLevel,
} from './types';

export const MAX_OPTION_SCORE = 3;
export const TOTAL_MAX_SCORE = questions.length * MAX_OPTION_SCORE;

const fallbackMaturityLevel = maturityLevels[0];

const categoryNameById = new Map(
  categories.map((category) => [category.id, category.name]),
);

const recommendationByCategoryId = new Map(
  categoryRecommendations.map((recommendation) => [
    recommendation.categoryId,
    recommendation,
  ]),
);

function calculatePercentage(score: number, maxScore: number) {
  if (maxScore === 0) {
    return 0;
  }

  return Math.round((score / maxScore) * 100);
}

function getRecommendationLevel(
  percentage: number,
): CategoryRecommendationLevel {
  if (percentage < 50) {
    return 'low';
  }

  if (percentage < 75) {
    return 'medium';
  }

  return 'high';
}

function compareCategoryPriority(
  firstCategory: CategoryScore,
  secondCategory: CategoryScore,
) {
  if (firstCategory.percentage !== secondCategory.percentage) {
    return firstCategory.percentage - secondCategory.percentage;
  }

  return firstCategory.score - secondCategory.score;
}

export function getMaturityLevelForScore(score: number): MaturityLevel {
  const normalizedScore = Math.min(Math.max(score, 0), TOTAL_MAX_SCORE);

  return (
    maturityLevels.find(
      (level) =>
        normalizedScore >= level.minScore && normalizedScore <= level.maxScore,
    ) ?? fallbackMaturityLevel
  );
}

export function getCategoryRecommendation(
  categoryId: DiagnosticCategoryId,
): CategoryRecommendation | undefined {
  return recommendationByCategoryId.get(categoryId);
}

export function calculateDiagnosticResult(
  answers: DiagnosticAnswers,
): DiagnosticResult {
  const scoreByCategory = new Map<DiagnosticCategoryId, number>();
  const maxScoreByCategory = new Map<DiagnosticCategoryId, number>();
  let totalScore = 0;
  let answeredQuestions = 0;

  for (const category of categories) {
    scoreByCategory.set(category.id, 0);
    maxScoreByCategory.set(category.id, 0);
  }

  for (const question of questions) {
    const currentMaxScore = maxScoreByCategory.get(question.categoryId) ?? 0;
    maxScoreByCategory.set(
      question.categoryId,
      currentMaxScore + MAX_OPTION_SCORE,
    );

    const selectedOptionId = answers[question.id];
    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    );

    if (!selectedOption) {
      continue;
    }

    const previousCategoryScore = scoreByCategory.get(question.categoryId) ?? 0;

    scoreByCategory.set(
      question.categoryId,
      previousCategoryScore + selectedOption.score,
    );
    totalScore += selectedOption.score;
    answeredQuestions += 1;
  }

  const categoryScores = categories.map<CategoryScore>((category) => {
    const score = scoreByCategory.get(category.id) ?? 0;
    const maxScore = maxScoreByCategory.get(category.id) ?? 0;
    const percentage = calculatePercentage(score, maxScore);

    return {
      categoryId: category.id,
      categoryName: categoryNameById.get(category.id) ?? category.name,
      score,
      maxScore,
      percentage,
      recommendationLevel: getRecommendationLevel(percentage),
    };
  });

  const improvementPriorities = [...categoryScores]
    .sort(compareCategoryPriority)
    .slice(0, 3);

  const strengths = [...categoryScores]
    .filter((categoryScore) => categoryScore.percentage >= 75)
    .sort((firstCategory, secondCategory) => {
      if (firstCategory.percentage !== secondCategory.percentage) {
        return secondCategory.percentage - firstCategory.percentage;
      }

      return secondCategory.score - firstCategory.score;
    });

  return {
    totalScore,
    maxScore: TOTAL_MAX_SCORE,
    percentage: calculatePercentage(totalScore, TOTAL_MAX_SCORE),
    answeredQuestions,
    totalQuestions: questions.length,
    isComplete: answeredQuestions === questions.length,
    maturityLevel: getMaturityLevelForScore(totalScore),
    categoryScores,
    strengths,
    improvementPriorities,
  };
}
