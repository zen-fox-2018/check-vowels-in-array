function generateBoard(rows,cols) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // let alphabet = "AIUEOBCD"
  let board = []
  for (let i = 0; i < rows; i++) {
    let innerArray = []
    for (let j = 0; j < cols; j++) {
      innerArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }
    board.push(innerArray)
  }
  return board
}


var board = generateBoard(5,4)

function checkAllVowels(board) {
  let rows = board.length
  let cols = board[0].length

  let vowels = "AIUEO"
  let blockCount = 0

  for (let i = 0; i < rows-1; i++) {
    for (let j = 0; j < cols-1; j++) {
      if (vowels.indexOf(board[i][j]) != -1 &&
          vowels.indexOf(board[i][j+1]) != -1 &&
          vowels.indexOf(board[i+1][j]) != -1 &&
          vowels.indexOf(board[i+1][j+1]) != -1) {
            blockCount++
      }
    }
  }
  return blockCount
}

console.log(board);

console.log(`Ada ${checkAllVowels(board)} block yang berisi vokal semua`);
