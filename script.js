// Year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
// Theme toggle
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme2') || 'light';
  function apply(mode){ root.classList.toggle('dark', mode === 'dark'); }
  apply(saved);
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    const next = (localStorage.getItem('theme2') || 'light') === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme2', next); apply(next);
  });
})();