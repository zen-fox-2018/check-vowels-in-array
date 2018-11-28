const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const vokals = 'AIUEO'

function makeBoard(row, col) {
    let board = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            temp.push(alphabet[Math.floor(Math.random() * alphabet.length)])
        }
        board.push(temp)
    }
    return board
}
// console.log(board(5, 4));

let board = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
]

function checkBlock(board) {
    let result = []
    for (let i = 0; i < board.length-1; i++) {
        for (let j = 0; j < board[i].length-1; j++) {
            let checkVowel = vokals.includes(board[i][j])
            if (checkVowel) {
                var block = [board[i][j], board[i][j+1], board[i+1][j], board[i+1][j+1]]
                var checkBlock = block.every(data => {
                    return vokals.includes(data)
                })
                if (checkBlock) {
                    result.push(block)
                }
                // console.log(block);
                // console.log(checkBlock);                
            }
        }
    }
    // console.log(count);
    console.log(result);
    return `ditemukan: ${result.length} block`
}

console.log(checkBlock(board));
