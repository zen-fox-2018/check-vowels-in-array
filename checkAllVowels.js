function generateArray(jumlahRow , jumlahCol) {
  let output = []
  let alfabet = 'aaaabcdeeeefghiiiijklmnoooopqrstuuuuvwxyz'

  for (let i = 0 ; i < jumlahRow; i++) {
    let arrDalam = []

    for (let j= 0 ; j < jumlahCol ; j++) {
      arrDalam.push(alfabet[Math.floor(Math.random() * alfabet.length)])
    }

    output.push(arrDalam)

  }

  return output

}

function check(huruf) {
  let vowel = 'aiueoAIUEO'
  return vowel.indexOf(huruf) !== -1
}

function checkVowels(arr) {
  let output = []
  // console.log(arr)
  for (let i = 0 ; i < arr.length - 1 ; i++) {

    for (let j = 0 ; j < arr[i].length - 1 ; j++) {
      if (check(arr[i][j]) && check(arr[i][j+1]) && check(arr[i+1][j]) && check(arr[i+1][j+1])) {
        let arrDalam = [ arr[i][j], arr[i][j+1], arr[i+1][j], arr[i+1][j+1] ]
        output.push(arrDalam)

      }
    }
  }

  return output
}

var a = generateArray(5,4)
var b = generateArray(5,4)
console.log(checkVowels([
  ['A','X','C','Y'],
  ['E','O','O','S'],
  ['I','U','I','N'],
  ['M','Y','O','E'],
  ['P','D','A','I']
]))
console.log(checkVowels(b))
