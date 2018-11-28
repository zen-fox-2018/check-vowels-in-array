
function nestedArray(row,col) {
    let result = []
    for(let i = 0; i < row; i ++){
        let bucket = []
        for(let j =1; j <= col; j ++){
            keyCode = String.fromCharCode(Math.floor(Math.random()*25)+65)
            bucket.push(keyCode.toLowerCase())
        }
        result.push(bucket)
    }
    return result
}



function saringVowels(i,j,row,col){
    let kamus = 'aiueo'
    let count = 0
    let str = nestedArray(row,col)
        for(k=0; k < kamus.length; k ++){       
            if(str[i][j] == kamus[k] && i !== col){
                count += 1
               
                if(str[i+1][j] == kamus[k]){
                    count += 1
                }
                if(str[i][j+1] == kamus[k]){
                    count +=1
                }
                if(str[i+1][j+1] == kamus[k]){
                    count += 1
                }
            }      
        }     
    if(count == 4){
        return true
    }
    else {
        return false
    }
}


//your code here
function allVowels (row,col){
    let hasil = 0
    for(let i = 0; i < row; i ++){
        for(let j = 0; j < col; j++){           
            if(saringVowels(i,j,row,col) ===  true){
                hasil += 1
            }
        }
    }
    return hasil
}

console.log(nestedArray(5,4));
console.log(allVowels(5,4))
//     ['A', 'X', 'C', 'Y'],
//     ['E', 'O', 'O', 'S'],
//     ['I', 'U', 'I', 'N'],
//     ['M', 'Y', 'O', 'E'],
//     ['P', 'D', 'A', 'I']
//     ]
// )
// )