function generate() {
    let registeredArr = {}
    let counter = 0
    const word = `AIUEO`
    const alph = `ABCDEFGHIJKLMNOPQRSTUVWXYZ` 
    // let board = [[`A`, `X`, `A`, `I`], [`T`, `X`, `A`, `I`], [`B`, `C`, `D`, `E`], [`F`, `G`, `H`, `I`]]
    let board = []
    let boardTemp = []

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            boardTemp.push(alph[
                Math.floor(
                Math.random() * alph.length
                )
            ])
        }
        board.push(boardTemp)
        boardTemp = []
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            registeredArr[counter] = board[i][j]
            counter++
        }
    }

    for (const key in registeredArr) {
        if (word.indexOf(registeredArr[String(Number(key))]) != -1 &&
            word.indexOf(registeredArr[String(Number(key) + 1)]) != -1 &&
            word.indexOf(registeredArr[String(Number(key) + 4)]) != -1 &&
            word.indexOf(registeredArr[String(Number(key) + 5)]) != -1) {
            console.log(board);

            return `${registeredArr[String(Number(key))]}${registeredArr[String(Number(key)+1)]}${registeredArr[String(Number(key)+4)]}${registeredArr[String(Number(key)+5)]}`
        }
    }

    return generate()
}


console.log(generate());

