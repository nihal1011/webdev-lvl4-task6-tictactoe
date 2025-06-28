const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let isGameOver = false;

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let combo of wins) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return cells[a].textContent;
    }
  }
  return null;
}

function handleCellClick(e) {
  const cell = e.target;
  if (cell.textContent || isGameOver) return;

  cell.textContent = currentPlayer;
  const winner = checkWinner();

  if (winner) {
    statusDisplay.textContent = `Player ${winner} Wins!`;
    isGameOver = true;
  } else if ([...cells].every(cell => cell.textContent)) {
    statusDisplay.textContent = "It's a Draw!";
    isGameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  isGameOver = false;
  statusDisplay.textContent = "Click a cell to begin!";
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
