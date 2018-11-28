function isVocal(string) {
    let vocal = 'aiueo'
    let isVocal = false
    for (let i = 0; i < vocal.length; i++) {
        if (string.toLowerCase() == vocal[i]) {
            isVocal = true
        }
    }
    return isVocal
}

function createArray(row, collumn) {
    let hasil = []
    for (let i = 0; i < row; i++) {
        let hasilDalam = []
        for (let j = 0; j < collumn; j++) {
            let angka = Math.floor(Math.random() * (90 - 65 + 1) + 65)
            let huruf = String.fromCharCode(angka)
            hasilDalam.push(huruf)
        }
        hasil.push(hasilDalam)
    }
    return hasil
}
function checkVowelsInArray(row, collumn) {
    let array = createArray(row, collumn)
    // let array = [
    //     ['D', 'D', 'C', 'A'],
    //     ['A', 'C', 'E', 'A'],
    //     ['C', 'A', 'A', 'A'],
    //     ['E', 'A', 'C', 'A'],
    //     ['A', 'A', 'C', 'A']]
    let jumlahArrayVokal = 0
    //cek berapa jumlah block 2x2 dengan semuanya huruf vocal
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array[i].length - 1; j++) {
            if (isVocal(array[i][j]) && isVocal(array[i][j + 1]) && isVocal(array[i + 1][j + 1]) && isVocal(array[i + 1][j])) {
                jumlahArrayVokal++
            }

        }
    }
    console.log(array)
    return jumlahArrayVokal
}



// console.log(checkVowelsInArray(3, 5))
console.log(checkVowelsInArray(5, 4))