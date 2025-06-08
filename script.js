const adultToggle = document.getElementById('adultToggle');
const adultLinks = document.getElementById('adult-links');

let adultConfirmed = localStorage.getItem('adultConfirmed') === 'true';

adultToggle.addEventListener('click', () => {
  if (!adultConfirmed) {
    const isAdult = confirm("This section contains adult-only content.\nAre you 18 years or older?");
    if (!isAdult) {
      alert("Access denied.");
      return;
    }
    adultConfirmed = true;
    localStorage.setItem('adultConfirmed', 'true');
  }
  adultLinks.style.display = adultLinks.style.display === 'flex' ? 'none' : 'flex';
});
