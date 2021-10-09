// JSON
// Java
// Script
// Object
// Notation
// parte da POO
// (Programação Orientada a Objetos)
const th = {
    nome: 'Thiago',
    idade: 16
};
// {chave1: valor, chave2: valor, chave3: valor, ...}
console.log(th.nome); // Thiago
th.nome = 'Thiago Gomes';
console.log(th); // { nome: 'Thiago Gomes', idade: 16 }
console.log(th['idade']); // 16
th['idade'] = th['idade'] + 1;
console.log(th['idade']); // 17
console.log(Object.keys(th)); // [ 'nome', 'idade' ]
const keys = Object.keys(th);
console.log(keys); // [ 'nome', 'idade' ]
console.log(th[keys[1]]); // 17

// Quokka
const idades = [1, 2, 3, 4];
for (let id of idades) {
    console.log(id); // 1,2,3,4
}
// ---
for (const k in th) { // percorre as chaves do objeto
    console.log(`${k}:${th[k]}`); // nome: Thiago Gomes, idade: 17
}

// Quokka
const curso = {
    nome: 'INFO',
    horas: 1200,
    modalidade: 'integrado'
};
console.log(curso.modalidade); // integrado
delete (curso.modalidade);
console.log(curso.modalidade); // undefined
// como não existe curso.curriculo, ele não mostra nada
if (curso.curriculo) console.log(curso.curriculo);
console.log(curso.modalidade || 'Sem currículo'); // Sem currículo
// ----

console.log(this); // {} // Objeto contextual

// No navegador
//console.log(this.Math); // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

//this['Math']['pow'](2, 8); // 256

//

const artista = {
    nome: 'Legião Urbana',
    albuns: [
        {
            nome: 'As quatro estações',
            cancoes: [
                {
                    titulo: 'Pais e filhos',
                    duracao: 5 * 60 + 8
                },
                {
                    titulo: 'Maurício',
                    duracao: 3 * 60 + 18
                }
            ]
        },
        {
            nome: 'V',
            cancoes: [
                {
                    titulos: 'Metal contra as nuvens',
                    duracao: 3 * 60 + 18
                }
            ]
        }
    ]
};

console.log(artista);
console.log(artista['albuns'][0]['nome']);


