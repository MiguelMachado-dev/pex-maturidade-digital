import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { categories } from '../data/categories';
import { questions } from '../data/questions';
import {
  clearStoredAnswers,
  loadStoredAnswers,
  saveStoredAnswers,
} from '../features/diagnostic/persistence';
import type { DiagnosticAnswers } from '../features/diagnostic/types';

function getFirstUnansweredQuestionIndex(answers: DiagnosticAnswers) {
  const firstUnansweredIndex = questions.findIndex(
    (question) => !answers[question.id],
  );

  return firstUnansweredIndex === -1 ? 0 : firstUnansweredIndex;
}

type DiagnosticPageState = {
  answers: DiagnosticAnswers;
  currentQuestionIndex: number;
  validationMessage: string;
};

export function DiagnosticPage() {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState<DiagnosticPageState>(() => {
    const storedAnswers = loadStoredAnswers();

    return {
      answers: storedAnswers,
      currentQuestionIndex: getFirstUnansweredQuestionIndex(storedAnswers),
      validationMessage: '',
    };
  });

  useEffect(() => {
    saveStoredAnswers(pageState.answers);
  }, [pageState.answers]);

  const currentQuestion = questions[pageState.currentQuestionIndex];
  const currentCategory = categories.find(
    (category) => category.id === currentQuestion.categoryId,
  );
  const selectedOptionId = pageState.answers[currentQuestion.id];
  const answeredQuestions = questions.reduce(
    (total, question) => total + (pageState.answers[question.id] ? 1 : 0),
    0,
  );
  const progressPercentage = Math.round(
    (answeredQuestions / questions.length) * 100,
  );
  const isFirstQuestion = pageState.currentQuestionIndex === 0;
  const isLastQuestion =
    pageState.currentQuestionIndex === questions.length - 1;
  const questionPosition = pageState.currentQuestionIndex + 1;

  function handleSelectOption(optionId: string) {
    setPageState((previousState) => ({
      ...previousState,
      answers: {
        ...previousState.answers,
        [currentQuestion.id]: optionId,
      },
      validationMessage: '',
    }));
  }

  function handlePreviousQuestion() {
    setPageState((previousState) => ({
      ...previousState,
      currentQuestionIndex: Math.max(previousState.currentQuestionIndex - 1, 0),
      validationMessage: '',
    }));
  }

  function handleNextQuestion() {
    if (!selectedOptionId) {
      setPageState((previousState) => ({
        ...previousState,
        validationMessage: 'Selecione uma opção antes de avançar.',
      }));
      return;
    }

    if (isLastQuestion) {
      navigate('/resultado');
      return;
    }

    setPageState((previousState) => ({
      ...previousState,
      currentQuestionIndex: Math.min(
        previousState.currentQuestionIndex + 1,
        questions.length - 1,
      ),
      validationMessage: '',
    }));
  }

  function handleQuestionShortcut(nextQuestionIndex: number) {
    setPageState((previousState) => ({
      ...previousState,
      currentQuestionIndex: nextQuestionIndex,
      validationMessage: '',
    }));
  }

  function handleRestart() {
    const shouldRestart = window.confirm(
      'Deseja apagar as respostas deste diagnóstico e começar novamente?',
    );

    if (!shouldRestart) {
      return;
    }

    clearStoredAnswers();
    setPageState({
      answers: {},
      currentQuestionIndex: 0,
      validationMessage: '',
    });
  }

  return (
    <section className="diagnostic-page" aria-labelledby="diagnostic-title">
      <div className="diagnostic-page__intro">
        <p className="eyebrow">Questionário</p>
        <h1 id="diagnostic-title">Diagnóstico de maturidade digital</h1>
        <p>
          Responda as perguntas com base na realidade atual da empresa. Nenhum
          dado pessoal é solicitado, e as respostas ficam apenas nesta sessão do
          navegador.
        </p>
      </div>

      <div className="progress-card" aria-label="Progresso do diagnóstico">
        <div className="progress-card__header">
          <strong>
            {answeredQuestions} de {questions.length} perguntas respondidas
          </strong>
          <span>{progressPercentage}%</span>
        </div>
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Progresso de respostas do diagnóstico"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progressPercentage}
        >
          <span style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>

      <article className="question-card">
        <div className="question-card__meta">
          <span>
            Pergunta {questionPosition} de {questions.length}
          </span>
          <span>{currentCategory?.name}</span>
        </div>

        <div className="question-card__category">
          <p className="eyebrow">{currentCategory?.shortName}</p>
          <p>{currentCategory?.description}</p>
        </div>

        <fieldset
          className="answer-options"
          aria-describedby={
            pageState.validationMessage ? 'answer-validation' : undefined
          }
        >
          <legend>{currentQuestion.title}</legend>

          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <label
                className={
                  isSelected
                    ? 'answer-option answer-option--selected'
                    : 'answer-option'
                }
                key={option.id}
              >
                <input
                  checked={isSelected}
                  name={currentQuestion.id}
                  onChange={() => handleSelectOption(option.id)}
                  type="radio"
                  value={option.id}
                />
                <span className="answer-option__score">{option.label}</span>
                <span className="answer-option__description">
                  {option.description}
                </span>
              </label>
            );
          })}
        </fieldset>

        {pageState.validationMessage ? (
          <p className="validation-message" id="answer-validation" role="alert">
            {pageState.validationMessage}
          </p>
        ) : null}

        <div className="question-card__actions">
          <button
            className="button button--secondary"
            disabled={isFirstQuestion}
            onClick={handlePreviousQuestion}
            type="button"
          >
            Voltar
          </button>
          <button
            className="button button--primary"
            onClick={handleNextQuestion}
            type="button"
          >
            {isLastQuestion ? 'Finalizar diagnóstico' : 'Avançar'}
          </button>
        </div>
      </article>

      <div className="question-shortcuts" aria-label="Atalhos das perguntas">
        {questions.map((question, index) => {
          const isCurrent = index === pageState.currentQuestionIndex;
          const isAnswered = Boolean(pageState.answers[question.id]);

          return (
            <button
              aria-current={isCurrent ? 'step' : undefined}
              aria-label={`Ir para pergunta ${index + 1}${
                isAnswered ? ', respondida' : ', não respondida'
              }`}
              className={[
                'question-shortcuts__item',
                isCurrent ? 'question-shortcuts__item--current' : '',
                isAnswered ? 'question-shortcuts__item--answered' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={question.id}
              onClick={() => handleQuestionShortcut(index)}
              type="button"
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button className="text-button" onClick={handleRestart} type="button">
        Limpar respostas e começar novamente
      </button>
    </section>
  );
}
