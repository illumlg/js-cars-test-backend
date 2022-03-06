// Task 2,3,4
// quick sort (recursive)
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



// Task 1

// initializing web server

const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

// initial data

let list = [
    {
        "id": 1,
        "carBrand": "Mercedes",
        "origin": "Germany",
        "popularModel": "S",
        "averagePrice": 5000
    },
    {
        "id": 2,
        "carBrand": "Ford",
        "origin": "USA",
        "popularModel": "Mustang",
        "averagePrice": 6500
    },
    {
        "id": 3,
        "carBrand": "Audi",
        "origin": "Germany",
        "popularModel": "R8",
        "averagePrice": 7000
    },
    {
        "id": 4,
        "carBrand": "Mitsubishi",
        "origin": "Japan",
        "popularModel": "Lancer",
        "averagePrice": 4500
    },
    {
        "id": 5,
        "carBrand": "Toyota",
        "origin": "Japan",
        "popularModel": "Camry",
        "averagePrice": 5500
    }
]

// allow cors for client-server interaction and json-body

app.use(cors())
app.use(express.json())

// crud

app.get('/read', (req, res) => {
    res.send(list)
})

app.post('/create', (req, res) => {
    let obj = req.body
    obj["id"] = list[list.length-1]["id"]+1
    list.push(obj)
    console.log(req.body)
})

app.put('/update', (req, res) => {
    let obj = req.body
    list = list.filter((el) => { return el.id!=obj.id })
    console.log(list)
    list.splice(obj.id-1, 0, obj)
    console.log(list)
})

app.delete('/delete', (req, res) => {
    let id = req.query.id
    console.log(id)
    list = list.filter((el) => { return el.id!=id })
    console.log(list)
})

// start server

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
    Task()
})