const readlineSync = require("readline-sync");
const fs = require("fs");

var inp = readlineSync.question('what are the given letters?\n')

var jumble = Array.from(inp)

var letters = []

for (let i = 0; i < jumble.length; i++){
    if ((!letters.includes(jumble[i])) && (jumble[i] != ' ')){
        letters.push(jumble[i])
    }
}

console.log("\npossible words:")

fs.readFile("words.json", function(err, data){
    if (err) throw err;

    const words = JSON.parse(data)['0'];

    fs.readFile("range.json", function(err, data){
        if (err) throw err;
    
        const range = JSON.parse(data)['0'];

        var res = ""
          
        for (let i = 0; i < letters.length; i++){

            for (let n = range[letters[i]+'-st']; n < range[letters[i]+'-ed']; n++){
                if (words[n].length == jumble.length){
                    let l = Array.from(words[n])

                    for (let a = 0; a < jumble.length; a++){
                        if (l.includes(jumble[a])){
                            delete l[l.indexOf(jumble[a])]

                            if(a == jumble.length-1){
                                res = res + words[n] + '\n'
                            }

                        }else{
                            break
                        }
                    }                 
                }
            }
        }
        if(res){
            console.log(res)
        }else{
            console.log("there are no possible results for the given letters")
        }
    });
});