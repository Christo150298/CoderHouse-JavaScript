const gameState = {
	board: ["", "", "", "", "", "", "", "", ""],
	currentPlayer: "X",
	isGameOver: false,
	winningPlayer: null
};

const renderBoard = () => {
	for (let i = 0; i < gameState.board.length; i++) {
		const cell = document.getElementById(i.toString());
		cell.textContent = gameState.board[i];
	};
};

const cells = document.querySelectorAll('td');
let currentPlayer = 'X';
let gameOver = false;

// Función para verificar si un jugador ha ganado
const checkWin = () => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      gameOver = true;
      alert(`${currentPlayer} ganó el juego!`);
      break;
    };
  };
};

// Función para cambiar de jugador
function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Función para manejar los clics en las celdas
function handleCellClick(e) {
  if (gameOver || e.target.textContent !== '') return;

  e.target.textContent = currentPlayer;
  checkWin();
  changePlayer();
}

// Agregar evento de clic a cada celda
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});