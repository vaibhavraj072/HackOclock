const gridContainer = document.querySelector('.grid-container');
const colors = ['#FBCC43', '#4285F4', '#0F9D58', '#EA4335'];

// Get number of rows and columns dynamically
const rows = Math.floor(window.innerHeight / 21);
const cols = Math.floor(window.innerWidth / 2);
const totalCells = rows * cols;

// Set grid container dimensions
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

// Create grid items
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-item');
  gridContainer.appendChild(cell);

  // Hover effect: Change color
  cell.addEventListener('mouseenter', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    cell.style.backgroundColor = randomColor;
  });

  // Reset color after 500ms
  cell.addEventListener('mouseleave', () => {
    setTimeout(() => {
      cell.style.backgroundColor = '#111'; // Reset to background color
    }, 500);
  });
}
