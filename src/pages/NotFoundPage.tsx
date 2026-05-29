import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="content-section" aria-labelledby="not-found-title">
      <p className="eyebrow">Página não encontrada</p>
      <h1 id="not-found-title">Não encontramos este endereço.</h1>
      <p>Confira o link acessado ou volte para a página inicial.</p>
      <Link className="button button--primary" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}
