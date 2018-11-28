function checkAllVowels(row, col) {
  var board = generateBoard(row, col);
  var counter = 0;
  console.log(board);

  for (var i = 0; i < board.length - 1; i++) {
    debugger;
    for (var j = 0; j < board.length; j++) {
      if (isVowel(board[i][j]) && isVowel(board[i][j + 1]) && isVowel(board[i + 1][j]) && isVowel(board[i + 1][j + 1])) {
        // console.log('row ===', board[i][j], board[i][j + 1], '=== column ---', board[i + 1][j], board[i + 1][j + 1], counter);
        counter++;
      }
    }
  }
  return counter;
}

function isVowel(input) {
  var vowels = 'AEIOU';
  for (let i = 0; i < vowels.length; i++) {
    if (input === vowels[i]) {
      return true;
    }
  }
  return false;
}

function generateBoard(row, col) {
  var result = [];
  var kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < row; i++) {
    var arr = [];
    for (let j = 0; j < col; j++) {
      let randomIndex = Math.floor(Math.random() * kamus.length);
      arr.push(kamus[randomIndex]);
    }
    result.push(arr);
  }

  var sample = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['U', 'I', 'I', 'T'],
    ['E', 'E', 'A', 'I'],
    ['A', 'I', 'O', 'E']
  ];
  return result;
}

console.log(checkAllVowels(5, 4));
