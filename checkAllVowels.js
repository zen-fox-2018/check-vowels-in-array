//your code here
function generateBoard (jumlahRow, jumlahCol){
  const abjad = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  var isiAbjad ='';
  for (var i = 0; i < jumlahRow; i++) {
    var isi = [];
    for (var j = 0; j < jumlahCol; j++) {
      isiAbjad += abjad.charAt(Math.floor(Math.random() * abjad.length));
      isi.push(isiAbjad);
      isiAbjad ='';
    }
    result.push(isi);
  }
  return result;
}

// console.log(generateBoard(5,4));

function vowelsBlock (board){
  // console.log(board);
  var totalBlock = 0;
  var check = false;
  for (var i = 0; i < board.length-1; i++) {
    for (var j = 0; j < board[i].length-1; j++) {
      if (/[aiueo]/.test(board[i][j])) {
        if (/[aiueo]/.test(board[i+1][j])) {
          if (/[aiueo]/.test(board[i][j+1])) {
            if (/[aiueo]/.test(board[i+1][j+1])) {
              totalBlock++;
            }
          }
        }
      }
    }
  }
  return totalBlock;
}

console.log(vowelsBlock([[ 'a','o','r'], [ 'i','e','d'], [ 'a','o','k']]));
console.log(vowelsBlock(generateBoard(5,7)));
