//1 - D
//2 - c
//3 - A
//4 - D
//5 - E
//6 - E
//7 - A
//8 - E
//9 - A
//10 - D

/*11 - Escreva um programa em Java Script que defina um objeto professor com as seguintes características:

a) nome, endereço, e - mail, sua formação.
*/
var Professor = {
    nome: '',
    endereco: '',
    email: '',
    formacao: ''
}

/*
b) Disciplinas será outro objeto, contendo: Nome das disciplinas que ministra.(Max 3), sala e o nome da escola onde atua.O programa deverá ler os dados de um professor e alterar os mesmos sempre que necessário no objeto.Mostrar todos os dados na tela.
*/

var disciplinas = {
    nDis: [],
    sala: '',
    nEscola: ''
}

var Prof1 = Professor;
Prof1.nome = prompt('Digite o nome do Professor: ');
Prof1.endereco = prompt('Digite o endereço de '+Prof1.nome+': ');
Prof1.email = prompt('Digite o email de ' + Prof1.nome + ': ');
Prof1.formacao = prompt('Digite a formação de ' + Prof1.nome + ': ');

var DisciplinasProf1 = disciplinas;
for (let c = 0;c<3; c++){
    DisciplinasProf1.nDis[c] = prompt('Digite a disciplina '+(c+1)+' de '+Prof1.nome);
}

DisciplinasProf1.sala = prompt('Digite a sala do '+Prof1.nome+'..');
DisciplinasProf1.nEscola = prompt('Digite a escola do ' + Prof1.nome + '..');

alert('Professor ' + Prof1.nome + '\n' + Prof1.endereco + '\n' + Prof1.email + '\n' + Prof1.formacao + '\nDisciplinas\n' + DisciplinasProf1.nDis + '\nSala ' + DisciplinasProf1.sala + '\nEscola ' + DisciplinasProf1.nEscola);

/*
12 - Implemente a classe Administrador como subclasse da classe Empregado.Um determinado administrador tem como atributos, para além dos atributos da classe Pessoa e da classe Empregado que são Nome, cpf, RG, endereço e setor que trabalham de uma determinada empresa, o atributo ajudaDeCusto(ajudas referentes a viagens, estadias, ...). Note que deverá redefinir na classe Administrador o método herdado calcularSalario(o salário de um administrador é equivalente ao salário de um empregado usual acrescido da ajuda de custo. Escreva um programa de teste adequado para esta classe(Objeto).
*/

class Pessoa {
    constructor(nome, cpf, rg, endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.endereco = endereco;
    }
    apresentar(){
        alert('Nome: '+this.nome+'\nCPF '+this.cpf+'\nRG '+this.rg+'\nEndereço '+this.endereco);
    }
}

class Empregado extends Pessoa {
    constructor(nome, cpf, rg, endereco){
        super(nome, cpf, rg, endereco);
        this.salarioBase = 1000;
    }
    calcularSalario(){
        this.salario = this.salarioBase;
    }
    apresentar() {
        alert('Nome: ' + this.nome + '\nCPF ' + this.cpf + '\nRG ' + this.rg + '\nEndereço ' + this.ndereco+'\nSalário '+this.salario);
    }    
}

class Administrador extends Empregado {
    constructor(nome, cpf, rg, endereco) {
        super(nome, cpf, rg, endereco);
        this.ajudaDeCusto = 100;
    }
    calcularSalario() {
        this.salario = this.salarioBase+this.ajudaDeCusto;
    }
    apresentar() {
        alert('Nome: ' + this.nome + '\nCPF: ' + this.cpf + '\nRG: ' + this.rg + '\nEndereço: ' + this.endereco + '\nSalário: ' + this.salario);
    }
}

var Joel = new Pessoa('Joel',1234,4321,'U.S.');
Joel.apresentar();
var Nate = new Empregado('Natham Drake', 1234, 4321, 'Libertalia');
Nate.calcularSalario();
Nate.apresentar();
var Crash = new Administrador('Crash Bandicoot', 1234, 4321, 'Num sei.');
Crash.calcularSalario();
Crash.apresentar();

/*
13 - Construa:
    
a.A classe ContaEspecial(Objeto) herda da classe ContaCorrente(Objeto).

b.Clientes que possuem conta especial possuem um limite de crédito.Dessa forma, podem fazer saques até esse valor limite.

c.O construtor da classe ContaEspecial deve receber como parâmetro o limite que o banco disponibiliza para o cliente.

d.Sobrescreva o método sacar na classe ContaEspecial, de modo que o cliente não possa ficar com saldo negativo.
*/

class ContaCorrente {
    constructor() { }
    sacar() {
        let a = parseInt(prompt('Digite o valor do saque: '));
        return a;
    }
}

class ContaEspecial extends ContaCorrente {
    constructor(limite) {
        super();
        this.limitCredt = limite;
    }
    setLimite(){
        this.limitCredt = parseInt(prompt('Digite o limite de crédito: '));
    }
    sacar() {
        let a = parseInt(prompt('Digite o valor do saque: '));
        if(a>this.limitCredt){
            let b = parseInt(prompt('Olha, vc deseja sacar mais do que o limite. Deseja sacar o limite msm ou menos?\n\n(1)Limite\n(2)Menos'));
            if(b == 1){
                return this.limitCredt;
            }
            if (b == 2) {
                let c = parseInt(prompt('Digite o novo saque: '));
                return c;
            }
        }else {
            return a;
        }
    }
}

var cc = new ContaCorrente();
alert('A conta corrente sacou R$'+cc.sacar());

var ce = new ContaEspecial(100);
alert('A conta Especial sacou R$' + ce.sacar());

/*
15 - Jogo de dados(Acerte o número seis)

O jogo que tem como objetivo fazer com que a pessoa que esteja jogando possa jogar um dado dez vezes. Caso o mesmo acerte o número 3 até a décima jogada exiba uma mensagem de parabéns para o jogador.Caso o jogador não consiga obter o número três em suas jogadas exiba uma mensagem infelizmente você não teve sorte, tente outra vez. Deverá ser criado uma classe denominada Dado que representará o dado.A classe
deverá possuir a propriedade número(permitir apenas valores entre 1 e 3), um construtor que inicio a propriedade número com o valor 1 e um método JogarDado que terá como objetivo simular o ato de jogar um dado(o valor obtido deverá ser armazenado na variável número.
*/

class Dado {
    constructor(){
        this.numero = 0;
    }
    jogarDado(){
        for(var c = 0; c<10;c++){
            this.numero = Math.ceil(Math.random() * 10);
            if(this.numero == 3){
                alert('Parabéns! vc ganhou');
                break
            }
        }
        if (this.numero != 3) {
            alert('Não foi dessa vez.. tente de novo');
        }
        this.numero = 0;
    }

}

var dado1 = new Dado();
dado1.jogarDado();