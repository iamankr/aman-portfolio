// JavaScript for theme toggling and simple navigation behaviour

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleButton = document.getElementById('darkToggle');
  // Load theme preference from localStorage
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    body.classList.add('dark');
  }
  // Toggle dark/light mode when user clicks the moon/sun button
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      // Change icon based on current theme
      if (body.classList.contains('dark')) {
        toggleButton.textContent = '☀️';
      } else {
        toggleButton.textContent = '🌙';
      }
    });
    // Set initial icon
    if (body.classList.contains('dark')) {
      toggleButton.textContent = '☀️';
    } else {
      toggleButton.textContent = '🌙';
    }
  }
});