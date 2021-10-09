console.log('variáveis');
let nome = 'Bruce';//ler -> o que muda (é computador)
console.log(nome);
nome = 'Peter';
console.log(nome);
const sobrenome = 'Parker';//const não muda
console.log(sobrenome);
console.log(nome, sobrenome);
console.log(nome + ' ' + sobrenome);//concatenação
//interpolação
console.log(`Nome: ${nome} ${sobrenome} ${2 + 2}`);//Ele resolve = ${2 + 2} = 4


let v1 = null;
console.log(v1);// null = sem valor!
v1 = undefined
console.log(v1);// valor indefinido
//console.log(v2); //variável indefinida (NÃO PODE!)


let v3 = 8;
let v4 = v3;
v3 = 5
console.log(v3, v4);// v3 = 5 v4 = 8
let v5 = 'teste';
//tipo (number, string, array, object)
console.log(typeof(v3));//number
console.log(typeof(v5));//string