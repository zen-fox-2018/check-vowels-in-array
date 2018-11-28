function checkAllVowels(row, col) {
  var board = generateBoard(row, col);
  var counter = 0;
  console.log(board);

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (isVowel(board[i][j]) && isVowel(board[i][j + 1]) && isVowel(board[j][i]) && isVowel(board[j][i - 1])) {
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

  // var sample = [
  //   ['A', 'X', 'C', 'Y'],
  //   ['A', 'O', 'O', 'S'],
  //   ['U', 'I', 'I', 'T'],
  //   ['P', 'D', 'A', 'I'],
  //   ['M', 'Y', 'O', 'E']
  // ];
  return result;
}

console.log(checkAllVowels(5, 4));
