import { describe, expect, it } from 'vitest';

import { categories } from '../../data/categories';
import { questions } from '../../data/questions';
import {
  calculateDiagnosticResult,
  getMaturityLevelForScore,
  TOTAL_MAX_SCORE,
} from './scoring';
import type { DiagnosticAnswers } from './types';

function createAnswersWithScore(targetScore: number): DiagnosticAnswers {
  const answers: DiagnosticAnswers = {};
  let remainingScore = targetScore;

  for (const question of questions) {
    const questionScore = Math.min(3, Math.max(remainingScore, 0));
    answers[question.id] = String(questionScore);
    remainingScore -= questionScore;
  }

  return answers;
}

describe('diagnostic scoring', () => {
  it('calculates the minimum score', () => {
    const result = calculateDiagnosticResult(createAnswersWithScore(0));

    expect(result.totalScore).toBe(0);
    expect(result.maxScore).toBe(90);
    expect(result.percentage).toBe(0);
    expect(result.answeredQuestions).toBe(questions.length);
    expect(result.isComplete).toBe(true);
    expect(result.maturityLevel.id).toBe('initial');
  });

  it('calculates the maximum score', () => {
    const result = calculateDiagnosticResult(
      createAnswersWithScore(TOTAL_MAX_SCORE),
    );

    expect(result.totalScore).toBe(90);
    expect(result.maxScore).toBe(90);
    expect(result.percentage).toBe(100);
    expect(result.answeredQuestions).toBe(questions.length);
    expect(result.isComplete).toBe(true);
    expect(result.maturityLevel.id).toBe('advanced');
  });

  it.each([
    [0, 'initial'],
    [29, 'initial'],
    [30, 'basic'],
    [54, 'basic'],
    [55, 'intermediate'],
    [74, 'intermediate'],
    [75, 'advanced'],
    [90, 'advanced'],
  ] as const)('classifies score %i as %s', (score, expectedLevel) => {
    expect(getMaturityLevelForScore(score).id).toBe(expectedLevel);
    expect(
      calculateDiagnosticResult(createAnswersWithScore(score)).maturityLevel.id,
    ).toBe(expectedLevel);
  });

  it('calculates scores by category', () => {
    const answers = createAnswersWithScore(0);
    const digitalPresenceQuestions = questions.filter(
      (question) => question.categoryId === 'digital-presence',
    );

    for (const question of digitalPresenceQuestions) {
      answers[question.id] = '3';
    }

    const result = calculateDiagnosticResult(answers);
    const digitalPresenceScore = result.categoryScores.find(
      (categoryScore) => categoryScore.categoryId === 'digital-presence',
    );
    const customerExperienceScore = result.categoryScores.find(
      (categoryScore) => categoryScore.categoryId === 'customer-experience',
    );

    expect(result.categoryScores).toHaveLength(categories.length);
    expect(digitalPresenceScore).toMatchObject({
      score: 15,
      maxScore: 15,
      percentage: 100,
      recommendationLevel: 'high',
    });
    expect(customerExperienceScore).toMatchObject({
      score: 0,
      maxScore: 6,
      percentage: 0,
      recommendationLevel: 'low',
    });
    expect(result.improvementPriorities).toHaveLength(3);
  });
});
