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

// Category filter pills on projects.html
(function initProjectFilter(){
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.proj-card');
  if (!pills.length || !cards.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.getAttribute('data-filter');

      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      cards.forEach(card => {
        const match = category === 'all' || card.getAttribute('data-category') === category;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
})();
