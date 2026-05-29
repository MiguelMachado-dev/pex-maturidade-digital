import { Link } from 'react-router-dom';

const audiences = [
  'microempresas e pequenos comércios',
  'prestadores de serviço e profissionais autônomos',
  'negócios familiares que usam tecnologia de forma informal',
  'empreendedores que querem organizar melhor seus canais digitais',
] as const;

const projectHighlights = [
  {
    title: 'Vínculo com o PEX',
    description:
      'A plataforma foi criada como uma solução prática para aproximar conhecimento acadêmico de necessidades reais de pequenos negócios.',
  },
  {
    title: 'Objetivo acadêmico',
    description:
      'Aplicar desenvolvimento web, diagnóstico tecnológico, segurança digital e consultoria inicial em um produto simples e acessível.',
  },
  {
    title: 'Uso educativo',
    description:
      'O resultado é uma orientação inicial. Ele não substitui uma análise técnica completa ou uma consultoria especializada.',
  },
] as const;

export function AboutPage() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="content-section">
        <p className="eyebrow">Sobre o projeto</p>
        <h1 id="about-title">Uma iniciativa acadêmica com impacto prático</h1>
        <p>
          Esta plataforma faz parte de um projeto PEX voltado a apoiar pequenos
          negócios na identificação de oportunidades de melhoria digital. O
          diagnóstico tem caráter educativo e oferece uma primeira visão sobre o
          uso de tecnologia no negócio.
        </p>
        <p>
          A ferramenta não coleta dados pessoais obrigatórios, não possui login
          e armazena as respostas apenas temporariamente no navegador durante a
          sessão do diagnóstico.
        </p>
        <Link className="button button--primary" to="/diagnostico">
          Iniciar diagnóstico
        </Link>
      </div>

      <div className="about-grid">
        {projectHighlights.map((highlight) => (
          <article className="info-card" key={highlight.title}>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>

      <div className="content-section">
        <p className="eyebrow">Público beneficiado</p>
        <h2>Para quem a ferramenta foi pensada?</h2>
        <p>
          O diagnóstico foi pensado para pessoas que precisam de uma visão
          simples sobre tecnologia, sem depender de termos técnicos ou sistemas
          complexos.
        </p>
        <ul className="check-list">
          {audiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </div>

      <aside className="notice-card" aria-labelledby="notice-title">
        <p className="eyebrow">Aviso importante</p>
        <h2 id="notice-title">Diagnóstico inicial e educativo</h2>
        <p>
          As recomendações apresentadas servem para orientar próximos passos.
          Antes de decisões críticas envolvendo segurança, dados ou sistemas, é
          recomendado buscar apoio profissional especializado.
        </p>
      </aside>
    </section>
  );
}
