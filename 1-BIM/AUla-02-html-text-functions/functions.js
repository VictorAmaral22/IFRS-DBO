//Rotate
let txt = 'ifrs';
//algoritmo (lógica)
txt = txt[txt.length-1] + txt.substr(0, txt.length-1);
//
console.log(txt); //sifr
console.log(txt === 'sifr');//true
console.assert(txt === 'sifr');
//rotate novamente
txt = txt[txt.length-1] + txt.substr(0, txt.length-1);
console.log(txt); //rsif

// Uma função 'guarda' (encapsula) um algorítmo

// entrada (parâmetros)
// "miolo" (corpo do algorítmo)
//saída (retorno)

function DoABarrelRoll(txt) {
    const resp = txt[txt.length-1] + txt.substr(0, txt.length-1);
    return resp;
}

let palavra = 'laptop';
let teste = DoABarrelRoll(palavra);
console.log(teste);

//no quokka aparece assim
//r 16 
//Declaração tradicional de uma "function"
// nomefun(part1,part2,partn)
