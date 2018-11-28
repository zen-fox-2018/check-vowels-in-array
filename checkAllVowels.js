
function generateBoard(row, column ) {
    let board = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0 ; i < row; i++) {
        board.push([]);
        for(let j = 0; j < column; j++) {
            let random = alphabet[Math.floor(Math.random()*alphabet.length)]
            board[i].push(random)
        }
    }
    return board
}

const boardGame = generateBoard(5, 4);

function checkAllVowels(input) {

    // let dummy = [
    //     ["A", "X", "C", "Y"],
    //     ["E", "O", "O", "S"],
    //     ["I", "U", "I", "N"],
    //     ["M", "Y", "O", "E"],
    //     ["P", "D", "A", "I"]
    // ]

    for(let i = 0; i < input.length - 1; i++) {
        let temp = []
        for(let j = 0; j < input[i].length - 1; j++) {
            temp.push(input[i][j], input[i+1][j], input[i][j+1], input[i+1][j+1])
        }

        let count = 0;
        let vowels = ["A", "I", "U", "E", "O"]
        temp.map(element => {
            if(vowels.includes(element)) {
                count++
            } else {
                return false
            }
        })
        return count
    }
}
console.log(checkAllVowels(boardGame))