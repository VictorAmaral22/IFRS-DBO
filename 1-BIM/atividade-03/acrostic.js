console.info('acrostic.js');

document.querySelector('h1').addEventListener('click', function(e) {
    e.target.textContent += '!';
});

const buttonAdd = document.querySelector('button:nth-of-type(1)');

let wordslist = [];
let wlcount = 0;
let invalid = 0;
buttonAdd.addEventListener('click', addWords);

function validacaoadd(splitted) {
    for (let c = 0; c < splitted.length && invalid !== 1; c++) {
        for (let c1 = 0; c1 < splitted[c].length && invalid !== 1; c1++) {
            if (splitted[c].charAt(c1) !== 'A' && splitted[c].charAt(c1) !== 'B' && splitted[c].charAt(c1) !== 'C' && splitted[c].charAt(c1) !== 'D' && splitted[c].charAt(c1) !== 'E' && splitted[c].charAt(c1) !== 'F' && splitted[c].charAt(c1) !== 'G' && splitted[c].charAt(c1) !== 'H' && splitted[c].charAt(c1) !== 'I' && splitted[c].charAt(c1) !== 'J' && splitted[c].charAt(c1) !== 'K' && splitted[c].charAt(c1) !== 'L' && splitted[c].charAt(c1) !== 'M' && splitted[c].charAt(c1) !== 'N' && splitted[c].charAt(c1) !== 'O' && splitted[c].charAt(c1) !== 'P' && splitted[c].charAt(c1) !== 'Q' && splitted[c].charAt(c1) !== 'R' && splitted[c].charAt(c1) !== 'S' && splitted[c].charAt(c1) !== 'T' && splitted[c].charAt(c1) !== 'U' && splitted[c].charAt(c1) !== 'V' && splitted[c].charAt(c1) !== 'W' && splitted[c].charAt(c1) !== 'X' && splitted[c].charAt(c1) !== 'Y' && splitted[c].charAt(c1) !== 'Z' && splitted[c].charAt(c1) !== ' ' && invalid !== 1 ) {
                console.log('Você adicionou uma palavra inválida. Não faz isso comigo, user!');
                invalid = 1;
            }
        }
    }
    return splitted;
}

function addWords(e) {
    const text = document.querySelector('textarea').value;
    console.info(text);
    // Split and add to a words list:
    let splitted = text.split(',');
    for (let c = 0; c < splitted.length; c++) {
        splitted[c] = splitted[c].trim();
    }
    splitted = validacaoadd(splitted);
    if ( invalid === 0 ) {
        for (let c = 0; c < splitted.length; c++, wlcount++) {
            wordslist[wlcount] = splitted[c];
        }
        document.querySelector('p').textContent = wordslist;
    }
    invalid = 0;
}

const buttonClear = document.querySelector('body > button:nth-of-type(1)');
buttonClear.addEventListener('click', clearWords);

function clearWords() {
    wordslist = [];
    wlcount = 0;
    document.querySelector('p').textContent = wordslist;
}

// Necessary code to read the word for acrostic generation
// and to assemble the table cells:
