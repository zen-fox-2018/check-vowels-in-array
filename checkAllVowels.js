//your code here

function checkVowel(inputArray){
    var output = []
    if(inputArray.length <=1 || inputArray[0].length <= 1)  return output //cek baris harus lebih dari 1 dan kolom lebih dari 1

    for(let i=0; i < inputArray.length; i++) {
       
        for(let j=0; j < inputArray[i].length; j++) {
            let temp = []
            if(inputArray[i+1] && inputArray[j+1]){
                if(checkIsVowel(inputArray[i][j]) && checkIsVowel(inputArray[i][j+1]) && checkIsVowel(inputArray[i+1][j]) &&  checkIsVowel(inputArray[i+1][j+1])) {
                    temp.push(inputArray[i][j], inputArray[i][j+1] , inputArray[i+1][j], inputArray[i+1][j+1])
                    output.push(temp)
                }
            }
        }
    }
    console.log('ini Yang sama')
    return output
}

function checkIsVowel(string) {
    var kamus = 'AIUEO'
    for(let k=0; k < kamus.length; k++) {
        if(string == kamus[k]) return true
    }
    return false
}

function generateSquare (row,col) {
   let  output = []
    for(let i=0; i < row; i++) {
        let outputDalam = []
        for(let j=0; j < col; j++) {
            let randomString = String.fromCharCode(~~((Math.random() * 26 ) + 65))
            outputDalam.push(randomString)
        }
        output.push(outputDalam)
    }
    console.log(output ,' Ini kotak random')
    return output
}
var inputArray = [
['A', 'W', 'C', 'Y'],
['E', 'O', 'O', 'S'],
['I', 'U', 'I', 'N'],
['M', 'Y', 'O', 'E'],
['P', 'D', 'A', 'I']
]
console.log(checkVowel(inputArray))
//console.log(checkVowel(generateSquare(5,4)))