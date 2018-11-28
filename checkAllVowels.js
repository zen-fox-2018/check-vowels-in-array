var board = generateBoard(5, 4);

function generateBoard(row, col) {
    //your code here
    let result = [];
    let randomAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < row; i++) {
        result.push([])
        for (let j = 0; j < col; j++) {
            let random = (Math.floor(Math.random() * randomAlp.length))
            result[i].push(randomAlp[random])
        }
    }
    return result
}

function getBlock(input) {
    let result = 0;

    for (let row = 0; row < input.length - 1; row++) {
        for (let col = 0; col < input[row].length - 1; col++) {
            if (checker((input[row][col]), (input[row][col + 1]), (input[row + 1][col]), (input[row + 1][col + 1]))) {
                result += 1
            }
        }

    }
    return result
}

function checker(cek1, cek2, cek3, cek4) {
    const vowel = 'AIUEO';
    let counter = 0;

    for (let i = 0; i < vowel.length; i++) {
        // debugger
        if (vowel[i] === cek1) {
            counter++
        }

        if (vowel[i] === cek2) {
            counter++
        }

        if (vowel[i] === cek3) {
            counter++
        }

        if (vowel[i] === cek4) {
            counter++
        }

    }

    if (counter === 4) {
        return true
    }
    return false
}




console.log(board);
console.log(getBlock(board));
