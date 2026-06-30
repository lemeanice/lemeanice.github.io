/* Shared nav + footer injected into every page */

function getRelativePath() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  // If we're in a subdir like water-tracker/, prefix with ../
  const isSubdir = window.location.pathname.includes('/water-tracker/') ||
                   window.location.pathname.includes('/archive-');
  return isSubdir ? '../' : '';
}

function injectNav(activePage) {
  const p = getRelativePath();
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="${p}index.html" class="nav-name">Lenice Lim</a>
    <div class="nav-links">
      <a href="${p}work.html" class="nav-link${activePage === 'work' ? ' active' : ''}">Work</a>
      <a href="${p}side-projects.html" class="nav-link${activePage === 'side-projects' ? ' active' : ''}">Side projects</a>
      <a href="${p}design-delights.html" class="nav-link${activePage === 'design-delights' ? ' active' : ''}">Design Delights</a>
      <a href="${p}about.html" class="nav-link${activePage === 'about' ? ' active' : ''}">About</a>
    </div>
    <a href="${p}assets/resume.pdf" target="_blank" class="nav-resume">Resume</a>
  `;
  document.body.prepend(nav);
}

function injectFooter() {
  const p = getRelativePath();
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-row">
      <div>
        <div class="footer-name">Lenice Lim</div>
        <div class="footer-role">Senior Product Manager · Singapore</div>
      </div>
      <div class="footer-links">
        <a href="mailto:lenicelim1@gmail.com" class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
          lenicelim1@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/lenice-lim-shan-xuan" target="_blank" class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a href="${p}assets/resume.pdf" target="_blank" class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
          Resume PDF
        </a>
      </div>
    </div>
    <div class="footer-copy">Built in HTML/CSS/JS · Hosted on GitHub Pages</div>
  `;
  document.body.append(footer);
}
