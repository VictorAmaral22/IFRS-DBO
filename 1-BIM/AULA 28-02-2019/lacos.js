console.log("lacos.js");
// for, while, do while, foreach

let txt = prompt('palavra');
let tam = prompt('tamanho');
let ch = prompt('caractere');
while (txt.length <= tam) {
    txt += ch;
}
console.log(txt);

const nomes = []; //vetor/array
console.log(nomes.length); //0
nomes.push('Bernardo');
nomes.push('Marina');
console.log(nomes);
console.table(nomes); //tabela
console.log(nomes[0], nomes[1]);
//nomes[2] não!
//ültimo
console.log(nomes[nomes.length - 1]);
nomes.push('Jean luca');
console.log(nomes[nomes.length - 1]);

for (let i = 0; i < nomes.length; i++) {
    console.log('Nome ', i + 1, nomes[i]);
    // console.log(`NOme ${i+1} ${nome[i]}`);
}

//for each (para cada) não tem índice
for (const nome of nomes) {
    console.log('Nome', nome);
}