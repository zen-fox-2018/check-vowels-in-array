function random() {
  let abzad = 'abcdefghijklmnopqrstuvwxyz'
  return abzad[Math.floor(Math.random()*abzad.length)]
}
// console.log(random())

function generateBoard(row, col) {
  let result = [];

  for (let i = 0; i < row; i++) {
    let temp = []
    while (temp.length < col) {
      temp.push(random())
    }
    result.push(temp)
  }
  return result
}
// console.log(generateBoard(5,4))

function checkVowels(data) {
  if(data == 'a' || data == 'i' || data == 'u' || data == 'e' || data == 'o') return true;
  return false
}
// console.log(checkVowels('e'))

function checkKotak(data) {
  let counter = 0;
  // console.log(data.length)
  
   data.forEach((i , indexi) => {
    i.forEach((j , indexj) => {
      // console.log(data[indexi].length)
      if(indexi < data.length-1 && indexj < data[indexi].length-1 ) {
        // console.log('====== ini i' , indexi , '\n')
        // console.log('====== ini j' , indexj)
        if(checkVowels(data[indexi][indexj]) && checkVowels(data[indexi][indexj+1]) && checkVowels(data[indexi + 1][indexj]) && checkVowels(data[indexi +1][indexj + 1])){
          counter++
        }
      }
     
    })
  })
  return counter
}
let dummy = [
  ['a','x','c','y'],
  ['e','o','o','s'],
  ['i','u','i','n'],
  ['m','y','o','e'],
  ['p' ,'d','a','i']
]
console.log(checkKotak(dummy));

console.log(checkKotak(generateBoard(5,4)))