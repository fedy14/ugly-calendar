const calendarContainer = document.getElementById('calendar');

// Example list of gifts or chocolates
const gifts = [
  "🎁 Chocolate Box",
  "🍫 Dark Chocolate",
  "🎅 Santa Figurine",
  "🌟 Candy Cane",
  "🎄 Christmas Ornament",
  "🧸 Teddy Bear",
  "🍪 Cookie Treat",
  "🎉 Party Popper",
  "📖 Storybook",
  "☕ Hot Cocoa Packet",
  "✨ Glitter Ball",
  "🎶 Christmas Music Box",
  "🎈 Balloon",
  "❄️ Snow Globe",
  "🎮 Mini Game",
  "📸 Polaroid Picture",
  "🏀 Tiny Basketball",
  "📿 Handmade Bracelet",
  "🍭 Lollipop",
  "🕯️ Candle",
  "🧦 Christmas Socks",
  "💌 Love Letter",
  "🌸 Fragrance",
  "🎤 Mini Microphone"
];

// Retrieve the state of opened boxes from LocalStorage
const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || {};

// Generate calendar
for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  box.dataset.day = i; // Store the day number in a data attribute

  let number = document.createElement('p');
  number.innerHTML = i;

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');

  let description = document.createElement('p');
  description.innerHTML = openedBoxes[i] ? openedBoxes[i] : "Open me!";

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);

  // Mark the box as opened if it's already opened
  if (openedBoxes[i]) {
    box.style.backgroundColor = "#ffcccc";
  }

  // Add click event to open the box
  box.addEventListener('click', () => {
    if (!openedBoxes[i]) {
      const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
      description.innerHTML = randomGift;
      openedBoxes[i] = randomGift;
      box.style.backgroundColor = "#ffcccc";

      // Save the state in LocalStorage
      localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes));
    }
  });

  calendarContainer.appendChild(box);
}
