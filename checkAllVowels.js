//your code here
const vocal = 'AIUEO'

function cekVocal(input) {
    for (let i = 0; i < vocal.length; i++) {
        if(input == vocal[i]) {
            return true
        }    
    }   

    return false
}

function generateBoard(jumlahRow, jumlahCol) {

    let output = []
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZAIUEOAIUEOAIUEOAIUEO'

    for (let i = 0; i < jumlahRow; i++) {

        let box = []

        for (let j = 0; j < jumlahCol; j++) {
            let index = Math.floor(Math.random()*huruf.length)
            box.push(huruf[index])        
        }

        output.push(box)
    }

    return output
}

let boardform = (generateBoard(5,4))

function cek(arr) {

    let output = 0
    
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr[i].length-1; j++) {

            if((cekVocal(arr[i][j])) && (cekVocal(arr[i][j+1])) && (cekVocal(arr[i+1][j])) && (cekVocal(arr[i+1][j+1]))) {
                output+=1
            }

        }
        
    }

    return output
}


// console.log(boardform);
console.log(cek(boardform));


