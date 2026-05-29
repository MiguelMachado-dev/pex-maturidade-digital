import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { questions } from '../data/questions';
import {
  clearStoredAnswers,
  loadStoredAnswers,
} from '../features/diagnostic/persistence';
import {
  calculateDiagnosticResult,
  getCategoryRecommendation,
} from '../features/diagnostic/scoring';
import type { DiagnosticResult } from '../features/diagnostic/types';

function buildResultText(result: DiagnosticResult) {
  const categoryLines = result.categoryScores.map(
    (categoryScore) =>
      `- ${categoryScore.categoryName}: ${categoryScore.score}/${categoryScore.maxScore} (${categoryScore.percentage}%)`,
  );
  const priorityLines = result.improvementPriorities.map(
    (categoryScore, index) =>
      `${index + 1}. ${categoryScore.categoryName} (${categoryScore.percentage}%)`,
  );

  return [
    'Diagnóstico de Maturidade Digital',
    `Pontuação geral: ${result.totalScore}/${result.maxScore} (${result.percentage}%)`,
    `Nível: ${result.maturityLevel.name}`,
    result.maturityLevel.description,
    '',
    'Prioridades de melhoria:',
    ...priorityLines,
    '',
    'Resultado por categoria:',
    ...categoryLines,
  ].join('\n');
}

export function ResultPage() {
  const [answers] = useState(() => loadStoredAnswers());
  const [copyStatus, setCopyStatus] = useState('');
  const result = useMemo(() => calculateDiagnosticResult(answers), [answers]);
  const missingAnswers = questions.length - result.answeredQuestions;

  async function handleCopyResult() {
    try {
      await navigator.clipboard.writeText(buildResultText(result));
      setCopyStatus('Resultado copiado para a área de transferência.');
    } catch {
      setCopyStatus('Não foi possível copiar automaticamente.');
    }
  }

  function handlePrintResult() {
    window.print();
  }

  if (!result.isComplete) {
    return (
      <section className="empty-result-card" aria-labelledby="result-title">
        <p className="eyebrow">Resultado indisponível</p>
        <h1 id="result-title">Finalize o diagnóstico para ver o resultado.</h1>
        <p>
          Ainda faltam {missingAnswers}{' '}
          {missingAnswers === 1 ? 'pergunta' : 'perguntas'} para calcular a
          maturidade digital da empresa.
        </p>
        <Link className="button button--primary" to="/diagnostico">
          Continuar diagnóstico
        </Link>
      </section>
    );
  }

  return (
    <section className="result-page" aria-labelledby="result-title">
      <div className="result-hero">
        <div>
          <p className="eyebrow">Resultado</p>
          <h1 id="result-title">{result.maturityLevel.name}</h1>
          <p>{result.maturityLevel.description}</p>
        </div>

        <div className="result-score" aria-label="Pontuação geral">
          <span>{result.percentage}%</span>
          <strong>
            {result.totalScore} de {result.maxScore} pontos
          </strong>
        </div>
      </div>

      <section className="result-actions" aria-label="Ações do resultado">
        <button
          className="button button--primary"
          onClick={handleCopyResult}
          type="button"
        >
          Copiar resultado
        </button>
        <button
          className="button button--secondary"
          onClick={handlePrintResult}
          type="button"
        >
          Imprimir
        </button>
        <Link
          className="button button--secondary"
          onClick={clearStoredAnswers}
          to="/diagnostico"
        >
          Refazer diagnóstico
        </Link>
        {copyStatus ? (
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
        ) : null}
      </section>

      <section aria-labelledby="category-results-title">
        <div className="section-heading">
          <p className="eyebrow">Categorias</p>
          <h2 id="category-results-title">Resultado por categoria</h2>
        </div>

        <div className="result-category-grid">
          {result.categoryScores.map((categoryScore) => (
            <article
              className="result-category-card"
              key={categoryScore.categoryId}
            >
              <div className="result-category-card__header">
                <h3>{categoryScore.categoryName}</h3>
                <strong>{categoryScore.percentage}%</strong>
              </div>
              <p>
                {categoryScore.score} de {categoryScore.maxScore} pontos
              </p>
              <div
                className="progress-bar"
                role="progressbar"
                aria-label={`Pontuação de ${categoryScore.categoryName}`}
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={categoryScore.percentage}
              >
                <span style={{ width: `${categoryScore.percentage}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="recommendations-title">
        <div className="section-heading">
          <p className="eyebrow">Recomendações</p>
          <h2 id="recommendations-title">Prioridades de melhoria</h2>
          <p>
            Foque primeiro nas três categorias com menor percentual. Elas tendem
            a gerar maior impacto inicial para a empresa.
          </p>
        </div>

        <div className="recommendation-grid">
          {result.improvementPriorities.map((categoryScore) => {
            const recommendation = getCategoryRecommendation(
              categoryScore.categoryId,
            );

            return (
              <article
                className="recommendation-card"
                key={categoryScore.categoryId}
              >
                <span className="recommendation-card__score">
                  {categoryScore.percentage}%
                </span>
                <h3>{recommendation?.title ?? categoryScore.categoryName}</h3>
                <ul className="check-list">
                  {(recommendation?.recommendations ?? [])
                    .slice(0, 4)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
