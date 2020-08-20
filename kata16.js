// Write an algorithm to detect if two queens on a chess board can attack each other - return true or false
// Board is 8 columns by 8 rows, with queens attacking on the same row, column, or diagoal
// Board represented by an 8 by 8 array, with a 1 representing a queen and a 0 representing an unoccupied space. No other pcs for this exercise
const generateBoard = function(whiteQueen, blackQueen) {
  let board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

const queenThreat = function(board) {
  let spot1 = [];
  let spot2 = [];
  let found = false; // condition for storing both positions in different variables
  for (let i = 0; i < 8; i++) {
    for (let x = 0; x < 8; x++) {
      if (board[i][x] === 1) {
        if (found) {
          spot2 = [i, x];
        } else {
          spot1 = [i, x];
          found = true;
        }
      }
    }
  }
  if (spot1[0] === spot2[0]) {
    return true;
  } else if (spot1[1] === spot2[1]) {
    return true;
  } else if (Math.abs(spot1[0] - spot1[1]) === Math.abs(spot2[0] - spot2[1])) {
    return true;
  } else {
    return false; 
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));