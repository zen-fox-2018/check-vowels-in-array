//your code here
function randomAlphabeth() {
    const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let random = Math.floor(Math.random()*alphabeth.length)
    return alphabeth[random]
}
function generateBoard(row = 5, col = 4) {
    let board = []
    for (let i = 0 ; i < row ; i++) {
        let temp = []
        for (let j = 0 ; j < col ; j++) {
            temp.push(randomAlphabeth())
        }
        board.push(temp)
    }
    return board
}
function checkVowels(row, col) {
    const board = generateBoard(row, col)
    const Vowels = ["a","i","u","e","o"]
    let count = 0
    for (let i = 0 ; i < board.length; i++) {
        for(let j = 0 ; j < board[i].length; j++) {
            if(i+1 < board.length && j+1 < board[i].length){
                let a = Vowels.includes(board[i][j].toLowerCase())
                let b = Vowels.includes(board[i+1][j].toLowerCase())
                let c = Vowels.includes(board[i+1][j+1].toLowerCase())
                let d = Vowels.includes(board[i][j+1].toLowerCase())
                if (a && b && c && d) {
                    count+= 1
                }
            }
        }
    }
    console.log(board)
    return count
}
var dummy = [
    ["A","I","B","S","D"],
    ["U","E","C","T","Y"],
    ["O","A","T","B","J"]
]

console.log(checkVowels())