const calendarContainer = document.getElementById('calendar');

// List of random gifts
const gifts = [
  "🎁 A Teddy Bear",
  "🍫 Chocolate Bar",
  "🎮 Game Controller",
  "📚 Book",
  "☕ Mug",
  "🎧 Headphones",
  "🧸 Plush Toy",
  "🍪 Cookie Tin",
  "🎅 Santa Hat",
  "🌟 Christmas Ornament",
];

// Load the calendar state from localStorage
let openedDays = JSON.parse(localStorage.getItem('openedDays')) || {};

// Function to generate random gift
function getRandomGift() {
  return gifts[Math.floor(Math.random() * gifts.length)];
}

// Create the calendar
for (let i = 1; i <= 24; i++) {
  const box = document.createElement('li');
  box.classList.add('calendar-box');
  box.dataset.day = i;

  const number = document.createElement('p');
  number.innerHTML = i;

  const description = document.createElement('p');
  description.innerHTML = openedDays[i] ? openedDays[i] : "Open me!";

  // Update box state if already opened
  if (openedDays[i]) {
    box.classList.add('opened');
  }

  box.appendChild(number);
  box.appendChild(description);
  calendarContainer.appendChild(box);

  // Add click event to open the day
  box.addEventListener('click', () => {
    if (!openedDays[i]) {
      const gift = getRandomGift();
      description.innerHTML = gift;
      box.classList.add('opened');
      openedDays[i] = gift;

      // Save the state to localStorage
      localStorage.setItem('openedDays', JSON.stringify(openedDays));
    }
  });
}
