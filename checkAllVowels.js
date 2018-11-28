//your code here

function checkVowel(inputArray){
    var output = []
    for(let i=0; i < inputArray.length; i++){
       
        for(let j=0; j < inputArray[i].length; j++){
            let temp = []
            if(inputArray[i+1]){
                if(checkIsVowel(inputArray[i][j]) && checkIsVowel(inputArray[i][j+1]) && checkIsVowel(inputArray[i+1][j]) &&  checkIsVowel(inputArray[i+1][j+1])){
                    temp.push(inputArray[i][j], inputArray[i][j+1] , inputArray[i+1][j], inputArray[i+1][j+1])
                    output.push(temp)
                }
            }
        }
    }
    return output
}

function checkIsVowel(string){
    var kamus = 'AIUEO'
    for(let k=0; k < kamus.length; k++){
        if(string == kamus[k]) return true
    }
    return false
}

var inputArray = [
['A', 'X', 'C', 'Y'],
['E', 'O', 'O', 'S'],
['I', 'U', 'I', 'N'],
['M', 'Y', 'O', 'E'],
['P', 'D', 'A', 'I']
]

console.log(checkVowel(inputArray))