//your code here
function generateBoard (jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let myResult = [];
  for (let i = 0; i < jumlahRow; i++) {
    let input = [];
    for (let j = 0; j < jumlahCol; j++) {
      input.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    myResult.push(input);
  }
  console.log(myResult);
  return myResult;
}

// const board = [
//   ['A', 'X', 'C', 'Y'],
//   ['E', 'O', 'O', 'S'],
//   ['I', 'U', 'I', 'N'],
//   ['M', 'Y', 'O', 'E'],
//   ['P', 'D', 'A', 'I']
// ];

function checkBlock(board) {
  let myResult = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let checkSquare = [];
      if (i - 1 >= 0 && j - 1 >= 0) {
        debugger;
        checkSquare.push(board[i-1][j-1], board[i-1][j], board[i][j-1], board[i][j]);
        let isCheck = checkSquare.every(data => {
          let vowels = ['A', 'I', 'U', 'E', 'O']
          return vowels.includes(data);
        });
        if(isCheck){
          myResult.push(checkSquare);
        }
      }
    }
  }
  return myResult;
}

function checkAllVowels(jumlahRow, jumlahCol) {
  return checkBlock(generateBoard(jumlahRow, jumlahCol));
}
console.log(checkAllVowels(10,10));
