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

// MENGGUNAKAN BUILT IN FUNCTION
// function checkBlock(board) {
//   let myResult = [];
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       let checkSquare = [];
//       if (i - 1 >= 0 && j - 1 >= 0) {
//         debugger;
//         checkSquare.push(board[i-1][j-1], board[i-1][j], board[i][j-1], board[i][j]);
//         let isCheck = checkSquare.every(data => {
//           let vowels = ['A', 'I', 'U', 'E', 'O']
//           return vowels.includes(data);
//         });
//         if(isCheck){
//           myResult.push(checkSquare);
//         }
//       }
//     }
//   }
//   return myResult;
// }

function checkBlock(board) {
  let myResult = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let checkSquare = [];
      if (i - 1 >= 0 && j - 1 >= 0) {
        debugger;
        checkSquare.push(board[i-1][j-1], board[i-1][j], board[i][j-1], board[i][j]);
        let isCheck = everyManual (checkSquare);
        if(isCheck){
          myResult.push(checkSquare);
        }
      }
    }
  }
  return myResult;
}

function everyManual (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (includesManual(arr[i]) === false) {
      return false;
    }
  }
  return true;
}

function includesManual (data) {
  let vowels = ['A', 'I', 'U', 'E', 'O']
  let isCheck = false;
  for (let i = 0; i < vowels.length; i++) {
    if (data === vowels[i]) {
      return true;
    }
  }
  return false;
}

function checkAllVowels(jumlahRow, jumlahCol) {
  let myResult = checkBlock(generateBoard(jumlahRow, jumlahCol));
  return `Jumlah block data adalah ${myResult.length}` + myResult;
}
console.log(checkAllVowels(15,15));
