//your code here
function generateBoard (row, column) {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = [];

    for (var i = 0; i < row; i++) {
        var temp = [];
        for (var j = 0; j < column; j++) {
            var index = Math.round((Math.random() * 25) + 0);
            temp.push (alphabets[index]);
        }
        result.push (temp);
    }

    return result
}
var board = generateBoard (5, 4);


function checkAllVowels (test) {
    var vowels = "AIUEO";
    var counter = 0;
    var i = 0;
    while (i <= test.length-1) {
        // console.log('row --->', i)
        var counterJ = 0;
        var j = 0;
        while (j <= test[i].length-1) {
            // console.log('column-->', j)
            var isVowels = false;
            var isVowelsVer = false;
            for (var k = 0; k <= vowels.length-1; k++) {
                //CHECK HORIZONTAL
                if (test[i][j] == vowels[k]) {
                    isVowels = true;
                    // console.log('atas', test[i][j])
                }
                
                //CHECK VERTICAL
                if (test[i+1] != undefined && test[i+1][j] == vowels[k]) {
                    isVowelsVer = true;
                    // console.log('bawah', test[i+1][j])
                }
            }
            if (isVowelsVer == true && isVowels == true) {
                // console.log('correct')
                counterJ++
                // console.log(counterJ)
                if (counterJ == 2) {
                    counter++;
                    counterJ = 0;
                } else if (counterJ < 2) {
                    j++;
                }
            } else {
                j++;
            }
        }
        i++;
    }
    return counter
}

console.log(checkAllVowels ([
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"],
]))
//3 
console.log(checkAllVowels ([
    ["A", "I", "B", "S", "D"],
    ["U", "E", "C", "T", "Y"],
    ["O", "A", "T", "B", "J"],
]))
//2

console.log("Random Board");
console.log(board);
console.log(checkAllVowels(board))
