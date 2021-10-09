// 1
class Pessoa {
    constructor(nome, add, tel) {
        this.nome = nome;
        this.endereco = add;
        this.telefone = tel;
    }

    //nome
    set n(tnome) {
        return this.nome = tnome;
    }
    get n() {
        return this.nome;
    }

    //Endereço
    set a(add) {
        return this.endereco = add;
    }
    get a() {
        return this.endereco;
    }

    //Telefone
    set t(tel) {
        return this.telefone = tel;
    }
    get t() {
        return this.telefone;
    }
}

// 2
class Fornecedor extends Pessoa {
    constructor(nome, endereco, telefone, a, b) {
        super(nome, endereco, telefone);
        this.valorCredito = a;
        this.valorDivida = b;
    }

    //Valor de Crédito
    set vc(valor) {
        return this.valorCredito = valor;
    }
    get vc() {
        return this.valorCredito;
    }

    //Valor da Dívida
    set vd(valor) {
        return this.valorDivida = valor;
    }
    get vd() {
        return this.valorDivida;
    }

    obterSaldo() {
        if (this.vc >= this.vd) {
            return this.vc - this.vd;
        }
        if (this.vd >= this.vc) {
            return this.vd - this.vc;
        }
    }
}

var fulaninho = new Fornecedor();
fulaninho.n = 'fulaninho';
fulaninho.a = 'na casa dele';
fulaninho.t = '123';
fulaninho.vc = 10;
fulaninho.vd = 5;
fulaninho.obterSaldo();

console.log('O fornecedor é o ' + fulaninho.n + ', que mora ' + fulaninho.a + '. Seu telefone é ' + fulaninho.t + '. Seu crédito: ' + fulaninho.vc + ', sua dívida: ' + fulaninho.vd + '. O saldo total é de: ' + fulaninho.obterSaldo());



// 3
class Empregado extends Pessoa {
    constructor(nome, endereco, telefone, x, y, z) {
        super(nome, endereco, telefone);
        this.codigoSetor = x;
        this.salarioBase = y;
        this.imposto = z;
    }

    //Código Setor
    set codS(valor) {
        return this.codigoSetor = valor;
    }
    get codS() {
        return this.codigoSetor;
    }

    //Salário Base
    set salB(valor) {
        return this.salarioBase = valor;
    }
    get salB() {
        return this.salarioBase;
    }

    //Imposto
    set i(valor) {
        return this.imposto = valor;
    }
    get i() {
        return this.imposto;
    }

    calcularSalario() {
        console.log((this.salB) - (((this.salB) * this.i) / 100));
        return (this.salB) - (((this.salB) * this.i) / 100);
    }
}

var empregado1 = new Empregado();
empregado1.n = 'Julio';
empregado1.a = 'Inglaterra';
empregado1.t = '321';
empregado1.codS = '1010';
empregado1.salB = 1000;
empregado1.i = 10;
console.log('O empregado é o ' + empregado1.n + ', que mora na ' + empregado1.a + '. Seu telefone é ' + empregado1.t + '. Seu código de setor é: ' + empregado1.codS + ', seu salário base é: ' + empregado1.salB + '. A taxa de imposto é de: ' + empregado1.i + '% e seu salário final R$' + empregado1.calcularSalario());

/* 4 Implemente a classe Administrador como subclasse da classe Empregado. Um determinado administrador tem como atributos, para além dos atributos da classe Pessoa e da classe Empregado, o atributo ajudaDeCusto (ajudas referentes a viagens, estadias, ...).Note que deverá redefinir na classe Administrador o método herdado calcularSalario(o salário de um administrador é equivalente ao salário de um empregado usual acrescido das ajuda de custo).Escreva um programa de teste adequado para esta classe. */

class Administrador extends Empregado {
    constructor(nome, endereco, telefone, x, y, z, ajudaDeCusto) {
        super(nome, endereco, telefone, x, y, z);
        this.ajudaDeCusto = ajudaDeCusto;
    }

    set adc(valor) {
        return this.ajudaDeCusto = valor;
    }
    get adc() {
        return this.ajudaDeCusto;
    }

    calcularSalario() {
        console.log(this.salarioBase + this.adc);
        return (this.salarioBase + this.adc);
    }
}

var adm = new Empregado();
adm.n = 'Julio';
adm.a = 'Inglaterra';
adm.t = '321';
adm.codS = '1010';
adm.salB = 1000;
adm.i = 10;
adm.adc = 100;
console.log('O Administrador é o ' + adm.n + ', que mora na ' + adm.a + '. Seu telefone é ' + adm.t + '. Seu código de setor é: ' + adm.codS + ', seu salário base é: ' + adm.salB + ' e sua ajuda de custo: ' + adm.adc + '. A taxa de imposto é de: ' + adm.i + '% e seu salário final R$' + adm.calcularSalario());