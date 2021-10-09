/*
1- Crie uma hierarquia de classes conforme abaixo com os seguintes atributos e comportamentos (observe a tabela), utilize os seus conhecimentos e distribua as características de forma que tudo o que for comum a todos os animais fique na classe Animal:
*/

class Animal {
    constructor(nome, idade, som, comportamento) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
        this.comportamento = comportamento;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "auauauau";
        this.comportamento = 'correr';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}

class Cavalo extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "Irraaaa";
        this.comportamento = 'correr';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}

class Preguica extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "AAAAaaaaaa";
        this.comportamento = 'escala';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}

/*
2- Implemente um programa que crie os 3 tipos de animais definidos no exercício anterior e invoque o
método que emite o som de cada um de forma polimórfica, isto é, independente do tipo de Animal.
*/

var Cachorrinho = new Cachorro('Doguinho', 2);
Cachorrinho.emitirSom();

var Cavalinho = new Cavalo('Carpeado', 30);
Cavalinho.emitirSom();

var Preguicosa = new Preguica('Preguiçosa', 2);
Preguicosa.emitirSom();

/*
3- Implemente uma classe Veterinario que contenha um método examinar() cujo parâmetro de
entrada é um Animal, quando o Animal for examinado ele deve emitir um som, passe os 3 animais com
parâmetro.
*/

class Veterinario {
    examinar(Animal) {
        console.log('O veterinário examina o(a) ' + Animal.nome + ' e ele(a) faz ' + Animal.som);
    }
}

var Vet1 = new Veterinario;
Vet1.examinar(Cachorrinho);

var Vet2 = new Veterinario;
Vet2.examinar(Cavalinho);

var Vet3 = new Veterinario;
Vet3.examinar(Preguicosa);

/*
4- Crie uma classe Zoologico, com 10 jaulas (utilize um array) coloque em cada jaula um Animal
diferente, percorra cada jaula e emita o som e, se o tipo de Animal possuir o comportamento, faça-o correr.
*/

class zoologico {
    constructor(jaulas) {
        this.jaulas = [jaulas[0], jaulas[1], jaulas[2], jaulas[3], jaulas[4], jaulas[5], jaulas[6], jaulas[7], jaulas[8], jaulas[9]];
    }

    emitirSom(Animal, jaula) {
        console.log('O Animal da jaula ' + jaula + ' faz ' + Animal.som);
    }
    executarComportamento(Animal, jaula) {
        if (Animal.comportamento == 'correr') {
            console.log('O Animal da jaula ' + jaula + ' ' + Animal.comportamento);
        }
    }
    percorrer() {
        for (var c = 0; c < this.jaulas.length; c++) {
            this.emitirSom((this.jaulas[c]), (c++));
            this.executarComportamento(this.jaulas[c], (c++));
        }
    }
}

//Cachorro, Cavalo, Preguiça foram reutilizados do exercício anterior

class leao extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "ROOOOAARRR";
        this.comportamento = 'observa';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Leaozao = new leao('Leão', 11);

class macaco extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "agagagaga";
        this.comportamento = 'escala';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Macacao = new macaco('Macaco', 11);

class zebra extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "arrfff";
        this.comportamento = 'correr';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Zebrona = new zebra('Zebra', 11);

class aguia extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "AIIIAAAAAA";
        this.comportamento = 'voa';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Aguiazona = new aguia('Aguia', 11);

class onca extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "ROOOOAARRR";
        this.comportamento = 'correr';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Oncona = new onca('Onça', 11);

class cobra extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "Tssssssss";
        this.comportamento = 'rasteja';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Cobrona = new cobra('Cobra', 11);

class gato extends Animal {
    constructor(nome, idade, som, comportamento) {
        super(nome, idade, som, comportamento);
        this.som = "Miau";
        this.comportamento = 'corre';
    }

    emitirSom() {
        console.log(this.nome + ' diz ' + this.som + '!');
    }
}
var Gatuno = new gato('Gato', 11);


var jaulas = [Cachorrinho, Cavalinho, Preguicosa, Leaozao, Macacao, Zebrona, Aguiazona, Oncona, Cobrona, Gatuno]
var zoo = new zoologico(jaulas);
zoo.percorrer();

/*
5- Resolva a seguinte situação utilizando os conceitos aprendidos. Uma empresa quer manter o registro
da vida acadêmica de todos os funcionários, o modelo deve contemplar o registro das seguintes
informações, de forma incremental:
5.1 Para o funcionário que não estudou, apenas o nome e o código funcional;
5.2 Para o funcionário que concluiu o ensino básico, a escola;
5.3 Para o funcionário que concluiu o ensino médio, a escola;
5.4 Para o funcionário que concluiu a graduação, a Universidade
*/

class funcionario {
    constructor(nome, codFunc) {
        this.nome = nome;
        this.codigoFuncional = codFunc;
    }
}

class funcionario_ensino_basico extends funcionario {
    constructor(nome, codFunc, escolaBas) {
        super(nome, codFunc);
        this.escolaEnsinoBasico = escolaBas;
    }
}

class funcionario_ensino_medio extends funcionario_ensino_basico {
    constructor(nome, codFunc, escolaBas, escolaMed) {
        super(nome, codFunc, escolaBas);
        this.escolaEnsinoMedio = escolaMed;
    }
}

class funcionario_graduacao extends funcionario_ensino_medio {
    constructor(nome, codFunc, escolaBas, escolaMed, universidade) {
        super(nome, codFunc, escolaBas, escolaMed);
        this.universidade = universidade;
    }
}

/*6- Estenda o modelo implementado no exercício anterior de forma que todo funcionário
possua uma renda básica de R$ 1000,00 e:*/
funcionario.salario = 1000;

/*6.1 Com a conclusão do ensino básico a renda total é renda básica acrescentada
em 10%;*/
funcionario_ensino_basico.salario = funcionario.salario + ((funcionario.salario * 10) / 100);

/*6.2 Com a conclusão do ensino médio a renda total é a renda do nível anterior
acrescentada em 50%;*/
funcionario_ensino_medio.salario = funcionario_ensino_basico.salario + ((funcionario_ensino_basico.salario * 50) / 100);

/*6.3 Com a conclusão da graduação a renda total é a renda do nível anterior acrescentada em
100%;*/
funcionario_graduacao.salario = funcionario_ensino_medio.salario + ((funcionario_ensino_medio.salario * 100) / 100);

/*6.4 Todos os cálculos são efetuados sempre sobre a última renda obtida*/

/*7- Crie um programa que simule uma empresa com 10 funcionários, utilize um array, sendo
que a escolaridade dos funcionários é distribuída da seguinte forma: 40% ensino básico, 40%
ensino médio e 20% nível superior. Calcule os custos da empresa com salários totais e por nível
de escolaridade, utilize a classe funcionário desenvolvida no exercício anterior.*/

var f1 = new funcionario_ensino_basico('a', 1, 'Escolinha Básicona');
var f2 = new funcionario_ensino_basico('b', 2, 'Escolinha Básicona');
var f3 = new funcionario_ensino_basico('c', 3, 'Escolinha Básicona');
var f4 = new funcionario_ensino_basico('d', 4, 'Escolinha Básicona');

var f5 = new funcionario_ensino_medio('e', 5, 'Escolinha Básicona', 'Escolinha Mediana');
var f6 = new funcionario_ensino_medio('f', 6, 'Escolinha Básicona', 'Escolinha Mediana');
var f7 = new funcionario_ensino_medio('g', 7, 'Escolinha Básicona', 'Escolinha Mediana');
var f8 = new funcionario_ensino_medio('h', 8, 'Escolinha Básicona', 'Escolinha Mediana');

var f9 = new funcionario_graduacao('i', 9, 'Escolinha Básicona', 'Escolinha Mediana', 'Universidade só os top');
var f10 = new funcionario_graduacao('j', 10, 'Escolinha Básicona', 'Escolinha Mediana', 'Universidade só os top');

var funcionarios = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

class empresa {
    constructor(funcionarios) {
        this.funcionarios = funcionarios;
    }

    calcularSalarioTotal() {
        var a = 0;
        for (let c = 0; c < this.funcionarios.length; c++) {
            a += this.funcionarios[c].salario;
        }
        return a;
    }

    calcularSalarioEnsBas() {
        var a = 0;
        for (let c = 0; c < 4; c++) {
            a += this.funcionarios[c].salario;
        }
        return a;
    }

    calcularSalarioEnsMed() {
        var a = 4;
        for (let c = 0; c < 8; c++) {
            a += this.funcionarios[c].salario;
        }
        return a;
    }

    calcularSalarioGrad() {
        var a = 8;
        for (let c = 0; c < 10; c++) {
            a += this.funcionarios[c].salario;
        }
        return a;
    }

}

var empresaShoow = new empresa(funcionarios);
console.log('O salario total é R$' + empresaShoow.calcularSalarioTotal);
console.log('O salario dos funcionários com ensino básico é R$' + empresaShoow.calcularSalarioEnsBas);
console.log('O salario dos funcionários com ensino médio é R$' + empresaShoow.calcularSalarioEnsMed);
console.log('O salario dos funcionários com graduação é R$' + empresaShoow.calcularSalarioGrad);

/*
8- Faça uma hierarquia de Comissões, crie as comissões de Gerente, Vendedor e Supervisor. Cada
uma das comissões fornece um adicional ao salário conforme abaixo:
8.1 Gerente: R$1500,00
8.2 Supervisor: R$600,00
8.3 Vendedor: R$250,00
*/

class comissoes {
    constructor(cargo, comissao) {
        this.cargo = cargo;
        this.comissao = comissao;
    }
}

class Gerente extends comissoes {
    constructor(cargo, comissao) {
        super(cargo, comissao);
        this.cargo = 'Gerente';
        this.comissao = 1500;
    }
}

class Supervisor extends comissoes {
    constructor(cargo, comissao) {
        super(cargo, comissao);
        this.cargo = 'Supervisor';
        this.comissao = 600;
    }
}

class Vendedor extends comissoes {
    constructor(cargo, comissao) {
        super(cargo, comissao);
        this.cargo = 'Vendedor';
        this.comissao = 250;
    }
}

/*9- Adicione a classe funcionário um atributo referente as comissões desenvolvidas no exercício anterior.
Corrija o método renda total de forma que ele some ao valor da renda calculada o adicional da comissão
do funcionário*/

funcionario.cargo = '';
funcionario.comissao = 0;

empresa.calcularSalarioTotal = function() {
    var a = 0;
    for (let c = 0; c < this.funcionarios.length; c++) {
        if (this.funcionario[c].cargo == 'Gerente') {
            a += this.funcionarios[c].salario + 1500;
        }
        if (this.funcionario[c].cargo == 'Supervisor') {
            a += this.funcionarios[c].salario + 600;
        }
        if (this.funcionario[c].cargo == 'Vendedor') {
            a += this.funcionarios[c].salario + 250;
        }
    }
    return a;
}

/*10- Refaça o exercício 7 considerando que 10% dos funcionários são Gerentes,
20% são supervisores e 70% são vendedores. */

f1 = new funcionario_ensino_basico('a', 1, 'Escolinha Básicona');
f1.cargo = 'Gerente';

f2 = new funcionario_ensino_basico('b', 2, 'Escolinha Básicona');
f2.cargo = 'Supervisor';
f3 = new funcionario_ensino_basico('c', 3, 'Escolinha Básicona');
f3.cargo = 'Supervisor';

f4 = new funcionario_ensino_basico('d', 4, 'Escolinha Básicona');
f4.cargo = 'Vendedor';
f5 = new funcionario_ensino_medio('e', 5, 'Escolinha Básicona', 'Escolinha Mediana');
f5.cargo = 'Vendedor';
f6 = new funcionario_ensino_medio('f', 6, 'Escolinha Básicona', 'Escolinha Mediana');
f6.cargo = 'Vendedor';
f7 = new funcionario_ensino_medio('g', 7, 'Escolinha Básicona', 'Escolinha Mediana');
f7.cargo = 'Vendedor';
f8 = new funcionario_ensino_medio('h', 8, 'Escolinha Básicona', 'Escolinha Mediana');
f8.cargo = 'Vendedor';
f9 = new funcionario_graduacao('i', 9, 'Escolinha Básicona', 'Escolinha Mediana', 'Universidade só os top');
f9.cargo = 'Vendedor';
f10 = new funcionario_graduacao('j', 10, 'Escolinha Básicona', 'Escolinha Mediana', 'Universidade só os top');
f10.cargo = 'Vendedor';

funcionarios = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
empresaShoow = new empresa(funcionarios);

console.log('O salario total é R$' + empresaShoow.calcularSalarioTotal);
console.log('O salario dos funcionários com ensino básico é R$' + empresaShoow.calcularSalarioEnsBas);
console.log('O salario dos funcionários com ensino médio é R$' + empresaShoow.calcularSalarioEnsMed);
console.log('O salario dos funcionários com graduação é R$' + empresaShoow.calcularSalarioGrad);

/*11- Sobreescreva o método toString de forma que ele imprima o nome do funcionário, a
comissão e o salário total. Imprima todos os funcionários da empresa criada no exercício 7.*/

for (let c = 0; c < funcionarios.length; c++) {
    console.log('O funcionário ' + funcionarios[c].nome + ' tem R$' + funcionarios[c].comissao + ' de comissão e seu salário total é de R$' + funcionarios[c].salario);
}