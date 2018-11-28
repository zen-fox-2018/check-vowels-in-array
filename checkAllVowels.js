//your code here
function checkAllVowels (jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let input = [];
  let myResult = [];
  for (let i = 0; i < jumlahRow; i++) {
    input.push([]);
    for (let j = 0; j < jumlahCol; j++) {
      input[i][j] = alphabet[Math.floor(Math.random() * alphabet.length)]
      let checkSquare = [];
      if (i - 1 >= 0 && j - 1 >= 0) {
        debugger;
        checkSquare.push(input[i-1][j-1], input[i-1][j], input[i][j-1], input[i][j]);
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
  console.log(input);
  return `Ada ${myResult.length} block yaitu ${myResult}`;
}

console.log(checkAllVowels(10,10));
// const input = [
//   ['A', 'X', 'C', 'Y'],
//   ['E', 'O', 'O', 'S'],
//   ['I', 'U', 'I', 'N'],
//   ['M', 'Y', 'O', 'E'],
//   ['P', 'D', 'A', 'I']
// ];
