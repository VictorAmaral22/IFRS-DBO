console.log("eventos.js");

// //seletores
// const seletor = 'table:nth-of-type(2) td';
// const tds = document.querySelectorAll(seletor);
// console.log(tds);

// for(const td of tds){ // para cada td
//     td.addEventListener('click', destacar);
// }
// function destacar() { // as funções são atreladas a um obj
//     // this -> contexto onde a função é invocada
//     console.log(this);
// }

const seletor = 'table:nth-of-type(2)';
const table = document.querySelector(seletor);
table.addEventListener('click', destacar);

function destacar(e) { // "e"
    // console.log(this);
    // quem específicamente
    // console.log(e.target);
    // é um TD?
    // console.log(e.target.tagName);
    if(e.target.tagName === 'TD'){
        e.target.classList.toggle('destaque'); // alternar
    }
}