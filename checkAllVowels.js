//your code here
function generateBoard(row, col) {
    let temp = []
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < row; i++) {
        let inner = []
        for(let i = 0; i < col; i++) {
            let random = Math.floor(Math.random() * alfabet.length)
            inner.push(alfabet[random])
        }
        temp.push(inner)
    }
    return temp
}
generateBoard(5, 5)

let dummyBoard = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
]

function checkVowelsArray(row, col) {
    let boards = generateBoard(row, col)
    let temp = []
    for(let i = 0; i < boards.length-1; i++) {
        for(let j = 0; j < boards[i].length-1; j++) {
            let arrTemp = []
            arrTemp.push(boards[i][j], boards[i][j+1], boards[i+1][j], boards[i+1][j+1])
            temp.push(arrTemp)
        }
    }
    let result = []
    for(let i = 0; i < temp.length; i++) {
        let str = ''
        for(let j = 0; j < temp[i].length; j++) {
            if(temp[i][j] === 'A' || temp[i][j] === 'E' || temp[i][j] === 'I' || temp[i][j] === 'O' || temp[i][j] === 'U') {
                str += temp[i][j]
            }
        }
        if(str === temp[i].join('')) {
            result.push(temp[i])
        }
    }
    return result.length
}

console.log(checkVowelsArray(5, 5))
