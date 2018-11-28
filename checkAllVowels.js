//your code here
function vowelsInArray(row,col){
    let rows = []
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<row; i++){
        let cols = []
        for(j=0; j<col; j++){
            let k = Math.floor(Math.random()*26)
            cols.push(kamus[k])
        }
        rows.push(cols)
    }

    
    return  rows

}

console.log(vowelsInArray(5,3))


function cariVowels (input){
    // let vowels = 'aiueo'
    let vowels = {a:0, i:0, u:0, e:0, o:0}
    count = 0
    for(let i=0; i<input.length-1; i++){
        for(j=0; j<input[i].length-1; j++){ 
            if(vowels[input[i][j]] !== undefined && vowels[input[i][j+1]] !== undefined && vowels[input[i+1][j]] !== undefined && vowels[input[i+1][j+1]] !== undefined){
                count++
            } 
        }
    }
    return count
}

console.log(cariVowels(vowelsInArray(5,3)))
//testcasevowel
console.log(cariVowels([ 
[ 'a', 'i', 'o' ],
[ 'a', 'a', 'i' ],
[ 'o', 'm', 'w' ],
[ 'p', 'w', 'n' ],
[ 'o', 'i', 'a' ] ]))
