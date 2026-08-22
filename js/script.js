// ============================================================
// Jaya Chaudhary — shared site scripts (index.html + projects.html)
// ============================================================

// Fade-up reveal for any element with class "reveal" as it scrolls into view
(function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.15 });

  items.forEach(el => io.observe(el));
})();

// Category tabs on projects.html — each tab shows its own separate project list
(function initProjectTabs(){
  const tabs = document.querySelectorAll('.filter-pill[data-tab]');
  const panels = document.querySelectorAll('.projects-page-grid[id^="panel-"]');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = 'panel-' + tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(panel => {
        panel.classList.toggle('is-active', panel.id === target);
      });
    });
  });
})();
