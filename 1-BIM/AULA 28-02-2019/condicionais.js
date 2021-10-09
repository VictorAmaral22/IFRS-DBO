console.log('condicionais');
//if if/else if/else if.../else
//switch/case/default
//?: (operador ternário)
// operadores lógicos  && (E) || (OU)

let idade = prompt("idade");
if( idade > 60 ){
    console.log('idoso');
}else if( idade < 60 ){
    console.log('não idoso');
}

let ano = '2019';

const temp = prompt("Temperatura");

// === , não ==
// ! , não !=

if(temp >= 20 && temp <= 30) {
    console.log("temperatura agradável");
}

if (temp > 60 || temp < 0) {
    console.log("temperatura insuportável");
}

const tipo = 2;
switch(tipo){ //fall through
    case 1: console.log('tipo 1'); break;
    default: console.log('inválido');
}

