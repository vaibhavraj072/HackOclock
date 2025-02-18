const gridContainer = document.querySelector('.grid-container');
    const colors = ['#FBCC43', '#4285F4', '#0F9D58', '#EA4335', '#FFFFFF'];
    // const colors = ['#FFFFFF'];

    function createGrid() {
      gridContainer.innerHTML = ''; // Clear previous grid
      const cellSize = 20; // Adjust size for better visibility
      const rows = Math.floor(window.innerHeight / cellSize);
      const cols = Math.floor(window.innerWidth / cellSize);
      gridContainer.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
      gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;

      for (let i = 0; i < rows * cols; i++) {
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
            cell.style.backgroundColor = 'transparent';
          }, 500);
        });
      }
    }

    createGrid();
    window.addEventListener('resize', createGrid);