import { Link } from 'react-router-dom';

import { categories } from '../data/categories';
import { maturityLevels } from '../data/recommendations';

const benefits = [
  'Identifique pontos fortes e fragilidades digitais.',
  'Receba uma visão inicial por categoria avaliada.',
  'Priorize melhorias simples e viáveis para a rotina.',
] as const;

const steps = [
  {
    title: 'Responda o questionário',
    description:
      'São 30 perguntas objetivas sobre práticas digitais comuns em pequenos negócios.',
  },
  {
    title: 'Veja sua pontuação',
    description:
      'A ferramenta calcula o resultado geral e mostra a pontuação por categoria.',
  },
  {
    title: 'Planeje melhorias',
    description:
      'O resultado destaca as três áreas que merecem mais atenção no momento.',
  },
] as const;

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section" aria-labelledby="home-title">
        <div className="hero-section__content">
          <p className="eyebrow">Diagnóstico gratuito e educativo</p>
          <h1 id="home-title">
            Avalie a maturidade digital da sua pequena empresa.
          </h1>
          <p className="hero-section__lead">
            Responda a um questionário objetivo e entenda como seu negócio usa
            tecnologia em áreas essenciais como atendimento, segurança,
            processos e presença online.
          </p>
          <div className="hero-section__actions">
            <Link className="button button--primary" to="/diagnostico">
              Iniciar diagnóstico
            </Link>
            <Link className="button button--secondary" to="/sobre">
              Conhecer o projeto
            </Link>
          </div>
        </div>

        <aside className="info-card" aria-labelledby="benefits-title">
          <h2 id="benefits-title">O que você recebe</h2>
          <ul className="check-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="content-section" aria-labelledby="maturity-title">
        <p className="eyebrow">Maturidade digital</p>
        <h2 id="maturity-title">O que é avaliado?</h2>
        <p>
          Maturidade digital é o quanto a empresa usa tecnologia de forma
          organizada, segura e útil para atender clientes, controlar rotinas e
          tomar decisões. O diagnóstico não exige conhecimento técnico e serve
          como ponto de partida para melhorias.
        </p>

        <div className="level-grid" aria-label="Níveis de maturidade">
          {maturityLevels.map((level) => (
            <article className="level-card" key={level.id}>
              <span>
                {level.minScore}–{level.maxScore} pontos
              </span>
              <h3>{level.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="categories-title">
        <p className="eyebrow">Categorias avaliadas</p>
        <h2 id="categories-title">Uma visão ampla do uso de tecnologia</h2>
        <div className="category-detail-grid">
          {categories.map((category) => (
            <article className="category-detail-card" key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="steps-title">
        <p className="eyebrow">Como funciona</p>
        <h2 id="steps-title">Do diagnóstico à ação</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
