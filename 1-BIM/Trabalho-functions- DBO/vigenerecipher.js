//Vigenère Cipher 1.0 pts
//Especificar, implementar e testar a Cifra de Vigenère.
//Especificar envolve definir a função, nome, parâmetros, entradas válidas e inválidas, 
//respostas esperadas, tudo coberto por casos de teste em situações normais e 
//excepcionais(entradas inválidas ou sujas).A especificação é por sua conta.

let alphabetI = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetII = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function keystream(chave, palavra) {
    let ks = "";
    while ((palavra.length) >= (chave.length + ks.length)) {
        ks = ks + chave;
    }
    let a = [];
    for (let c = 0; c <= chave.length - 1; c++) {
        a[c] = chave.charAt(c);
    }
    for (let c = 0; palavra.length > ks.length; c++) {
        if (c === a.length) {
            c = 0;
        }
        ks = ks + a[c];
    }
    return ks;
}

function vegenere(palavra, ks) {

    let r = '';
    let c = 0;
    for (let c1 = 0; c < palavra.length; c++) {
        let a = findchar(palavra[c]);
        let b = findchar(ks[c]);
        if (palavra[c] === "A" || palavra[c] === "B" || palavra[c] === "C" || palavra[c] === "D" || palavra[c] === "E" || palavra[c] === "F" || palavra[c] === "G" || palavra[c] === "H" || palavra[c] === "I" || palavra[c] === "J" || palavra[c] === "K" || palavra[c] === "L" || palavra[c] === "M" || palavra[c] === "N" || palavra[c] === "O" || palavra[c] === "P" || palavra[c] === "Q" || palavra[c] === "R" || palavra[c] === "S" || palavra[c] === "T" || palavra[c] === "U" || palavra[c] === "V" || palavra[c] === "W" || palavra[c] === "X" || palavra[c] === "Y" || palavra[c] === "Z" || palavra[c] === "a" || palavra[c] === "b" || palavra[c] === "c" || palavra[c] === "d" || palavra[c] === "e" || palavra[c] === "f" || palavra[c] === "g" || palavra[c] === "h" || palavra[c] === "i" || palavra[c] === "j" || palavra[c] === "k" || palavra[c] === "l" || palavra[c] === "m" || palavra[c] === "n" || palavra[c] === "o" || palavra[c] === "p" || palavra[c] === "q" || palavra[c] === "r" || palavra[c] === "s" || palavra[c] === "t" || palavra[c] === "u" || palavra[c] === "v" || palavra[c] === "w" || palavra[c] === "x" || palavra[c] === "y" || palavra[c] === "z") {
            c1 = (a + b) % 26;
            r += alphabetI[c1]
        } else {
            r += palavra[c];
        }
    }
    return r;
}

function findchar(char) {
    let c = 0;
    while (c <= 25) {
        if (alphabetI[c] === char || alphabetII[c] === char) {
            break;
        }
        c++;
    }
    return c;
}

//Easy way(0.5 pts): todas as funções / métodos embutidas do JS permitidas;

//Hard way(1.0 pts): todas as funções / metodos embutidas do 
//JS proibidas exceto Array.length, Array[index], String.length, String.charAt and 
//String[index].

let palavra = 'lemonade';
let chave = 'lemon';
let r = vegenere(palavra, keystream(chave, palavra));

//Normal cases
console.log(r); // 'wiycalhq'
console.assert(r === 'wiycalhq');
console.log(vegenere('dado', keystream('cr', 'dado'))); //frff
console.assert(vegenere('dado', keystream('cr', 'dado')));
//-----

//UpperCase cases
console.log(vegenere('ATTACKATDAWN', keystream('LEMON', 'ATTACKATDAWN'))); //lxfopvefrnhr
console.log(vegenere('PROGRAMMING', keystream('INJS', 'PROGRAMMING')));//xexyznveqap
//-----

//With numbers and Uppercase characters
console.log(vegenere('123ELEphants', keystream('inTHEhouse', '123ELEphants')));//123lpldbsrbf
//-----

//With spaces and other symbols
console.log(vegenere('M I A U', keystream('cat', 'M I A U')));//o b a w
console.log(vegenere('_-$BING&BENG$-_', keystream('BellsRingingBel', '_-$BING&BENG$-_')));//_-$maeo&hmam$-_
//-----