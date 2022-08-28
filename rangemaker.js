const fs = require('fs')
const dic = require('./range')

fs.readFile('words.json', function(err, data) {
    if (err) throw err;

    const words = JSON.parse(data)['0'];

    wordic = {}

    var i = 0
    while (i < Object.getOwnPropertyNames(words).length){
        if ((Array.from(words[i.toString()])[0] == 'a') && (i == 0)){
            wordic['a-st'] = i

        }else if ((Array.from(words[i.toString()])[0] == 'b') && (Array.from(words[(i-1).toString()])[0] == 'a')){
            wordic['a-ed'] = i-1
            wordic['b-st'] = i

        }else if ((Array.from(words[i.toString()])[0] == 'c') && (Array.from(words[(i-1).toString()])[0] == 'b')){
            wordic['b-ed'] = i-1
            wordic['c-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'd') && (Array.from(words[(i-1).toString()])[0] == 'c')){
            wordic['c-ed'] = i-1
            wordic['d-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'e') && (Array.from(words[(i-1).toString()])[0] == 'd')){
            wordic['d-ed'] = i-1
            wordic['e-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'f') && (Array.from(words[(i-1).toString()])[0] == 'e')){
            wordic['e-ed'] = i-1
            wordic['f-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'g') && (Array.from(words[(i-1).toString()])[0] == 'f')){
            wordic['f-ed'] = i-1
            wordic['g-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'h') && (Array.from(words[(i-1).toString()])[0] == 'g')){
            wordic['g-ed'] = i-1
            wordic['h-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'i') && (Array.from(words[(i-1).toString()])[0] == 'h')){
            wordic['h-ed'] = i-1
            wordic['i-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'j') && (Array.from(words[(i-1).toString()])[0] == 'i')){
            wordic['i-ed'] = i-1
            wordic['j-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'k') && (Array.from(words[(i-1).toString()])[0] == 'j')){
            wordic['j-ed'] = i-1
            wordic['k-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'l') && (Array.from(words[(i-1).toString()])[0] == 'k')){
            wordic['k-ed'] = i-1
            wordic['l-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'm') && (Array.from(words[(i-1).toString()])[0] == 'l')){
            wordic['l-ed'] = i-1
            wordic['m-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'n') && (Array.from(words[(i-1).toString()])[0] == 'm')){
            wordic['m-ed'] = i-1
            wordic['n-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'o') && (Array.from(words[(i-1).toString()])[0] == 'n')){
            wordic['n-ed'] = i-1
            wordic['o-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'p') && (Array.from(words[(i-1).toString()])[0] == 'o')){
            wordic['o-ed'] = i-1
            wordic['p-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'q') && (Array.from(words[(i-1).toString()])[0] == 'p')){
            wordic['p-ed'] = i-1
            wordic['q-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'r') && (Array.from(words[(i-1).toString()])[0] == 'q')){
            wordic['q-ed'] = i-1
            wordic['r-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 's') && (Array.from(words[(i-1).toString()])[0] == 'r')){
            wordic['r-ed'] = i-1
            wordic['s-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 't') && (Array.from(words[(i-1).toString()])[0] == 's')){
            wordic['s-ed'] = i-1
            wordic['t-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'u') && (Array.from(words[(i-1).toString()])[0] == 't')){
            wordic['t-ed'] = i-1
            wordic['u-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'v') && (Array.from(words[(i-1).toString()])[0] == 'u')){
            wordic['u-ed'] = i-1
            wordic['v-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'w') && (Array.from(words[(i-1).toString()])[0] == 'v')){
            wordic['v-ed'] = i-1
            wordic['w-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'x') && (Array.from(words[(i-1).toString()])[0] == 'w')){
            wordic['w-ed'] = i-1
            wordic['x-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'y') && (Array.from(words[(i-1).toString()])[0] == 'x')){
            wordic['x-ed'] = i-1
            wordic['y-st'] = i
            
        }else if ((Array.from(words[i.toString()])[0] == 'z') && (Array.from(words[(i-1).toString()])[0] == 'y')){
            wordic['y-ed'] = i-1
            wordic['z-st'] = i
            wordic['z-ed'] = Object.getOwnPropertyNames(words).length-1            
            
        }
        i++
    }

    dic.push(wordic);
    
    fs.writeFile("range.json", JSON.stringify(dic), err => {
        if (err) throw err; 
    
        console.log(wordic); // Success
    });

});
