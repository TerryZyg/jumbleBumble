//making a new DB decreases the search time by quite a bit
const fs = require('fs')
const {EOL} = require('os')

const dic = require('./words')

var words
var wordic = {}

fs.readFile('words_alpha.txt', 'utf8', function(err, data) {
    if (err) throw err;
    words = data.split(EOL)

    var i = 0
    var n = 0
    while (i < words.length){
        if ((words[i].length > 3) && (words[i].length < 7)){
            wordic[n] = words[i]
            n++
        }
        i++
    }

    dic.push(wordic);
    
    fs.writeFile("words.json", JSON.stringify(dic), err => {
        if (err) throw err; 
    
        console.log(dic); // Success
    });

});


