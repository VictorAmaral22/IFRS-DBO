//OBJETO
//Um objeto é um agrupamento de propriedades. Propriedades são as características do objeto. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto, um número ou uma string.
//Exemplo:
var Carro = {
    nome: 'Gol',
    marca: 'Wolkswagen',
    mover: function() {
        alert('O ' + this.nome + ' se move..');
    }
}



//CLASSE
//É uma maneira mais clara e simples de criar objetos e trabalhar com herança. Ela é uma forma para a criação de objetos e as classes filhos de uma classe pai, podem herdar seus atributos.
//Exemplo:
class pessoas {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    falar() {
        alert('Hello world');
    }
}

//HERANÇA
//É quando um objeto herda os atributos e métodos do seu 'pai'. Geralmente temos isso com classes, onde a class children herda as coisas do super
//Exemplo:
class Brasileiro extends pessoas {
    constructor(nome, idade, sexo, estado) {
        super(nome, idade, sexo)
        this.estado = estado;
    }
}

//POLIMORFISMO
//É quando é preciso alterar um método do super
//Exemplo:
Brasileiro.falar = function() {
    alert('Olá mundo!');
}

//ABSTRAÇÃO
// Quando transpomos para os códigos com a maior precisão possível as caracterpisticas de um ser, objeto ou conceito existente na realidade da vida, essa matrix inacreditável que preende os seres humanos e os escraviza em busca de prazeres momentânios e supérfulos.
//Exemplo:
var Bolhas = {
    nome: 'Bolha',
    material: 'Sabão',
    dimensao: '1cm x 1cm',
    cor: 'transparente'
        //etc...
}

//ENCAPSULAMENTO
// Esconder coisas do usuário e ele também não pode mudá-las
//Exemplo:

function ContaCorrente(codigo) {
    this.codigo = codigo; // atributo publico
    var saldo = 0.0; // atributo privado

    // metodos publicos
    this.deposita = function(valor) {
        saldo += valor;
        imprime("Depositou R$ " + valor);
    };
    this.mostraSaldo = function() {
        imprime("Saldo: " + saldo);
    };

    // metodos privados
    function imprime(msg) {
        console.log(msg);
    }
}

var c = new ContaCorrente(1234);
console.log(c.codigo);

c.deposita(1000);
c.mostraSaldo();

c.saldo = 17; // tenta mudar o saldo
c.mostraSaldo(); // continua 1000