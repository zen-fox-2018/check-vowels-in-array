// //your code here
function generate(row, col) {
  let alphabets = 'ABCDEFGHIJKAIUEOLMNOPQRSTUVWXYZAIUEOAIUEO'
  let finalBoard = []

  for (let i = 0; i < row; i++) {
    let tmpBoard = []
    for (let j = 0; j < col; j++) {
      tmpBoard.push(alphabets[Math.floor(Math.random() * alphabets.length)])
    }
    finalBoard.push(tmpBoard)
  }
  return finalBoard
}

function isVowels(str) {
  let vowels = 'AIUEO'
  for (let i = 0; i < vowels.length; i++) {
    if (str === vowels[i]) {
      return true
    }
  }
  return false
}

var boardForm = generate(5, 4)

function checkVowels(board) {
  let countVowels = 0
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (isVowels(board[i][j]) && isVowels(board[i + 1][j]) && isVowels(board[i + 1][j + 1]) && isVowels(board[i][j + 1])) {
        countVowels++  
      }
    }
  }
  return countVowels
}

// var testCase = [
//   ['A', 'U', 'C', 'Y'],
//   ['E', 'O', 'O', 'S'],
//   ['I', 'U', 'I', 'N'],
//   ['P', 'D', 'A', 'I']
// ]

// console.log(checkVowels(testCase))

console.log(boardForm)
console.log(checkVowels(boardForm))
