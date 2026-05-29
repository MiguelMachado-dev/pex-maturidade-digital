import { NavLink, Outlet } from 'react-router-dom';

const navigationItems = [
  { label: 'Início', to: '/' },
  { label: 'Diagnóstico', to: '/diagnostico' },
  { label: 'Resultado', to: '/resultado' },
  { label: 'Sobre', to: '/sobre' },
] as const;

type NavLinkState = {
  isActive: boolean;
};

function getNavLinkClassName({ isActive }: NavLinkState) {
  return isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link';
}

export function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <div className="site-header__content">
          <NavLink className="site-logo" to="/" aria-label="Página inicial">
            <span className="site-logo__mark">PEX</span>
            <span className="site-logo__text">Maturidade Digital</span>
          </NavLink>

          <nav className="site-nav" aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <NavLink
                className={getNavLinkClassName}
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-container" id="conteudo-principal">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          Ferramenta educativa para apoiar pequenas empresas na evolução do uso
          de tecnologia.
        </p>
      </footer>
    </div>
  );
}
