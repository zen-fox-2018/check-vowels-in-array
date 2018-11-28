//your code here

function BoardGenerator(nRow, nCol) {
    let arrOutput = []

    for (let i = 0; i < nRow; i++) {
        let arrRow = []

        for (let j = 0; j < nCol; j++) {
            arrRow.push(String.fromCharCode(Math.floor(Math.random() * 26 + 65)))
            // arrRow.push("A")
        }
        arrOutput.push(arrRow)
    }
    return arrOutput
}

function isBlock(i, j, nRow, nCol){
    let counterVowel = 0
    let vowel = 'AIUEO'
    let arrBoard= BoardGenerator(nRow, nCol)

    for (let k = 0; k < vowel.length; k++) {
        if (arrBoard[i][j] == vowel[k] && i!==nRow-1 && j!== nCol-1) {
            counterVowel++

            if (arrBoard[i][j + 1] == vowel[k]) {
                counterVowel++
            }
            if (arrBoard[i + 1][j] == vowel[k]) {
                counterVowel++
            }
            if (arrBoard[i + 1][j + 1] == vowel[k]) {
                counterVowel++
            }
        }
    }

    if (counterVowel == 4) {
        return true
    }   else{
        return false
    }

}

function VowelBlockCounter(nRow, nCol) {
    let counterBlock = 0

    for (let i = 0; i < nRow; i++) {
        for (let j = 0; j < nCol; j++) {
            if (isBlock(i, j, nRow, nCol)) {
                counterBlock++
            }
        }
    }
    return counterBlock
}

console.log(BoardGenerator(5, 4))
console.log(VowelBlockCounter(5, 4));

