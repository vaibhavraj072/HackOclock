const gridContainer = document.querySelector('.grid-container');

// Predefined set of colors
const colors = ['#FBCC43', '#4285F4', '#0F9D58', '#EA4335'];

// Calculate total grid cells based on viewport size
const rows = Math.floor(window.innerHeight / 21); // 20px cell size + 1px gap
const cols = Math.floor(window.innerWidth / 21);
const totalCells = rows * cols;

// Function to get a random color from the array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Create grid items
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-item');
  gridContainer.appendChild(cell);

  // Add hover effect
  cell.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor;
  });

  // Reset color on mouseout
  cell.addEventListener('mouseout', () => {
    setTimeout(() => {
      cell.style.backgroundColor = '#111';
    }, 500);
  });
}
