// Track adult confirmation globally
let adultConfirmed = localStorage.getItem('adultConfirmed') === 'true';

// Toggle dropdown menus (for desktop/mobile)
function toggleDropdown(menuId) {
  const menu = document.getElementById(menuId);
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

// Setup buttons
document.addEventListener('DOMContentLoaded', () => {
  const adultBtn = document.getElementById('adult-btn');
  const gamesBtn = document.getElementById('games-btn');

  adultBtn.addEventListener('click', () => {
    if (!adultConfirmed) {
      const isAdult = confirm("This section contains adult-only content.\nAre you 18 years or older?");
      if (!isAdult) {
        alert("Access denied.");
        return;
      }
      adultConfirmed = true;
      localStorage.setItem('adultConfirmed', 'true');
    }
    toggleDropdown('adult-menu');
    // Hide games menu if open
    document.getElementById('games-menu').classList.add('hidden');
  });

  gamesBtn.addEventListener('click', () => {
    toggleDropdown('games-menu');
    // Hide adult menu if open
    document.getElementById('adult-menu').classList.add('hidden');
  });

  // Close dropdowns if clicked outside
  document.addEventListener('click', (e) => {
    if (!adultBtn.contains(e.target) && !document.getElementById('adult-menu').contains(e.target)) {
      document.getElementById('adult-menu').classList.add('hidden');
    }
    if (!gamesBtn.contains(e.target) && !document.getElementById('games-menu').contains(e.target)) {
      document.getElementById('games-menu').classList.add('hidden');
    }
  });
});
