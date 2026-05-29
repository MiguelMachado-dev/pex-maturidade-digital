import { questions } from '../../data/questions';
import type { DiagnosticAnswers } from './types';

export const DIAGNOSTIC_ANSWERS_STORAGE_KEY =
  'pex-maturidade-digital:diagnostic-answers:v1';

const questionIds = new Set(questions.map((question) => question.id));

function isAnswerMap(value: unknown): value is DiagnosticAnswers {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  return Object.entries(value).every(
    ([questionId, optionId]) =>
      questionIds.has(questionId) &&
      typeof optionId === 'string' &&
      optionId.length > 0,
  );
}

export function loadStoredAnswers(): DiagnosticAnswers {
  try {
    const storedAnswers = window.sessionStorage.getItem(
      DIAGNOSTIC_ANSWERS_STORAGE_KEY,
    );

    if (!storedAnswers) {
      return {};
    }

    const parsedAnswers: unknown = JSON.parse(storedAnswers);

    return isAnswerMap(parsedAnswers) ? parsedAnswers : {};
  } catch {
    return {};
  }
}

export function saveStoredAnswers(answers: DiagnosticAnswers) {
  window.sessionStorage.setItem(
    DIAGNOSTIC_ANSWERS_STORAGE_KEY,
    JSON.stringify(answers),
  );
}

export function clearStoredAnswers() {
  window.sessionStorage.removeItem(DIAGNOSTIC_ANSWERS_STORAGE_KEY);
}
