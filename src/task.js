
function qsort(arr) {
    if(arr.length<=1)
        return arr
    let el = arr[0]
    let l = []
    let r = []
    for (let i = 1; i < arr.length; i++) {
        arr[i] < el ? l.push(arr[i]) : r.push(arr[i]);
    }
    return qsort(l).concat(el, qsort(r))
}

function Task() {
    console.log("hello");
    console.log("\ntask 2:\n");

    let c=0;
    let board = [['X', '.', '.', 'X'],
                ['.', '.', '.', 'X'],
                ['.', '.', '.', 'X'],
                ['X', 'X', '.', 'X']];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.')
                continue;
            if (i>0 && board[i-1][j] == 'X')
                continue;
            if (j>0 && board[i][j-1] == 'X')
                continue;
            c++;
        }
        
    }
    console.log("Ships count "+c);

    console.log("\ntask 3:\n")
    

    let ints = [5, 1, 2, 7, 5, 11, 53, 4, 25]
    console.log(qsort(ints))

    console.log("\ntask 4:\n")

    json1 = require("./first.json")
    json2 = require("./second.json")
    let str = "{";
    let missing = 0;
    for (const i in json2) {
        if(json1[i]==json2[i]) {
            str += '\n  \"'+i+'\": '+json1[i];
        } else if (json1[i]!==json2[i] && json1.hasOwnProperty(i)) {
            str += '\n  + \"'+i+'\": '+json1[i];
            str += '\n  - \"'+i+'\": '+json2[i];
        } else if (!json1.hasOwnProperty(i)) {
            str += '\n  + \"'+i+'\": '+json2[i];
        }
        missing++;
    }
    let keys = Object.keys(json1)
    for (let i = missing; i < keys.length; i++) {
        str += '\n  - \"'+keys[i]+'\": '+json1[keys[i]];
        console.log(str)
    }
    str += "\n}"
    console.log("Json diff:\n\n"+str);
}
