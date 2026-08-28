// Header component
export function createHeader() {
  return `
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a href="/" class="logo" aria-label="Estética Danielle Bocchi - Home">
          <img src="/assets/images/logo.png" alt="Estética Danielle Bocchi" class="logo-img">
          <span class="logo-text">Danielle Bocchi</span>
        </a>
        <nav class="main-nav" id="main-nav" aria-label="Navegação principal">
          <ul class="nav-list">
            <li><a href="/" class="nav-link${isActive('/')}">Home</a></li>
            <li><a href="/servicos.html" class="nav-link${isActive('/servicos.html')}">Serviços</a></li>
            <li><a href="/sobre.html" class="nav-link${isActive('/sobre.html')}">Sobre</a></li>
            <li><a href="/contato.html" class="nav-link${isActive('/contato.html')}">Contato</a></li>
          </ul>
        </nav>
        <a href="https://wa.me/5541997581018" target="_blank" rel="noopener noreferrer" class="btn btn-primary header-cta">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
      </div>
    </header>
  `;
}

// Footer component
export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" aria-label="Estética Danielle Bocchi - Home"><img src="/assets/images/logo.png" alt="Estética Danielle Bocchi" class="footer-logo"></a>
            <p class="footer-tagline">Seu protocolo, feito pra você.</p>
            <div class="social-links">
              <a href="https://instagram.com/esteticadanibocchi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com/esteticadanibocchi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://threads.net/@esteticadanibocchi" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 0C5.902 0 1.273 4.637.254 10.927c-.102.627-.153 1.255-.153 1.882 0 .627.051 1.255.153 1.882C1.273 20.363 5.902 24 12.186 24c6.284 0 10.913-4.637 11.932-10.927.102-.627.153-1.255.153-1.882 0-.627-.051-1.255-.153-1.882C23.099 4.637 18.47 0 12.186 0zM12.186 21.818c-4.73 0-8.395-3.637-9.227-8.337-.077-.438-.115-.877-.115-1.314 0-.437.038-.876.115-1.314.832-4.7 4.497-8.337 9.227-8.337s8.395 3.637 9.227 8.337c.077.438.115.877.115 1.314 0 .437-.038.876-.115 1.314-.832 4.7-4.497 8.337-9.227 8.337zM12.186 4.5c-2.538 0-4.395 1.496-5.373 3.641-.188.414-.597.141-.414-.596.19-.754.336-1.31.356-1.641-.273-1.386-.777-3.227-1.777-4.032-.52.437-1.281 1.402-1.281 2.437 0 .886.298 1.648.845 2.241-.938.038-1.934-.959-1.934-1.883 0 0 0-2.593.915-4.061 1.093-2.779 4.058-3.514 6.844-1.892 1.589 3.784 3.695 7.249 5.118 7.249 2.214 0 2.71-2.668 2.215-3.518-.934 1.638-2.662 2.533-3.15 3.52-.245-.979.336-2.437.98-3.238.445.979.077 1.966.077 2.945-.126.841-.6 1.512-1.549 1.512-.795 0-1.356-.739-1.356-1.796 0-2.494 1.496-3.103 3.632-3.103 1.723 0 3.096.774 3.096 2.483 0 1.593-.852 2.767-2.06 3.413.974.577 1.496 1.315 1.496 2.322 0 1.661-.9 2.787-2.368 2.787-1.34 0-2.171-1.052-2.171-2.171 0-1.588 1.047-2.762 1.627-2.762.879 0 1.129.578 1.129 1.129 0 .455-.196.671-.671.671-.379 0-.852-.252-1.129-.578-.641.646-1.535 1.129-2.61 1.129-1.535 0-2.61-.834-2.61-2.171 0-1.535 1.075-2.762 1.954-2.762a.664.664 0 01.832.641c0 .434-.285.434-.285 0 .434 0 .434.285 0 .285-.979-.205-1.535-.664-1.535-1.535-.852.852-1.535 2.093-1.535 3.405 0 1.535.852 2.61 2.171 2.61 1.535 0 2.61-1.075 2.61-2.61 0-1.535-1.075-2.41-2.171-2.41z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-info">
            <h4 class="footer-title">Endereço</h4>
            <address class="footer-address">
              Av. Cândido de Abreu, 140, Sl 706<br>
              Centro Cívico, Curitiba-PR<br>
              CEP 80530-000
            </address>
          </div>
          <div class="footer-info">
            <h4 class="footer-title">Horário</h4>
            <p class="footer-hours">
              Seg–Sex: 9h às 19h30<br>
              Sábado: 8h às 15h<br>
              Domingo: Fechado
            </p>
          </div>
          <div class="footer-info">
            <h4 class="footer-title">Contato</h4>
            <p class="footer-contact">
              <a href="tel:+5541997581018">(41) 99758-1018</a><br>
              <a href="https://instagram.com/esteticadanibocchi" target="_blank" rel="noopener noreferrer">@esteticadanibocchi</a>
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Estética Danielle Bocchi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

function isActive(path) {
  const current = window.location.pathname;
  if (path === '/' && (current === '/' || current === '/index.html')) return ' active';
  if (path !== '/' && current.endsWith(path)) return ' active';
  return '';
}

// Inject components
export function injectComponents() {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (headerEl) headerEl.innerHTML = createHeader();
  if (footerEl) footerEl.innerHTML = createFooter();

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });
  }

  // Header scroll effect
  const header = document.getElementById('site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
}
