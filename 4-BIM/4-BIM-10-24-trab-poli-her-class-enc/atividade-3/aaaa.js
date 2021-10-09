class animal {
    constructor(peso, idade, membros) {
        this.peso = peso;
        this.idade = idade;
        this.membros = membros;
    }
    setPeso(a) {
        this.peso = a;
    }
    setIdade(a) {
        this.idade = a;
    }
    setMembros(a) {
        this.membros = a;
    }
    locomover() {}
    alimentar() {}
    emitirSom() {}
}

class mamifero extends animal {
    constructor(peso, idade, membros, corpelo) {
        super(peso, idade, membros);
        this.corpelo = corpelo;
    }
    setCorPelo(a) {
        this.corpelo = a;
    }
    locomover() {
        alert('Correndo');
    }
    alimentar() {
        alert('Mamando');
    }
    emitirSom() {
        alert('Som de mamífero');
    }
}

class reptil extends animal {
    constructor(peso, idade, membros, corescamas) {
        super(peso, idade, membros);
        this.corescamas = corescamas;
    }
    setCorEscamas(a) {
        this.corescamas = a;
    }
    locomover() {
        alert('Rastejando');
    }
    alimentar() {
        alert('Comendo vegetais');
    }
    emitirSom() {
        alert('Som de réptil');
    }
}

class peixe extends animal {
    constructor(peso, idade, membros, corescamas) {
        super(peso, idade, membros);
        this.corescamas = corescamas;
    }
    setCorEscamas(a) {
        this.corescamas = a;
    }
    locomover() {
        alert('Nadando');
    }
    alimentar() {
        alert('Comendo substâncias');
    }
    emitirSom() {
        alert('...');
    }
    soltarBolhas() {
        alert('Soltando bolhas')
    }
}

class ave extends animal {
    constructor(peso, idade, membros, corpenas) {
        super(peso, idade, membros);
        this.corpenas = corpenas;
    }
    setCorPenas(a) {
        this.corpenas = a;
    }
    locomover() {
        alert('Voando');
    }
    alimentar() {
        alert('Comendo frutas');
    }
    emitirSom() {
        alert('Som de ave');
    }
    fazerNinho() {
        alert('Construiu ninho');
    }
}

var m = new mamifero();
m.setPeso(10);
m.setIdade(2);
m.setMembros(4);
m.locomover();
m.alimentar();
m.emitirSom();

var r = new reptil();
r.setPeso(10);
r.setIdade(2);
r.setMembros(4);
r.locomover();
r.alimentar();
r.emitirSom();

var p = new peixe();
p.setPeso(1);
p.setIdade(12);
p.setMembros(3);
p.locomover();
p.alimentar();
p.emitirSom();
p.soltarBolhas();

var a = new ave();
a.setPeso(10);
a.setIdade(2);
a.setMembros(4);
a.locomover();
a.alimentar();
a.emitirSom();
a.fazerNinho();

/////////////

class canguru extends mamifero {
    constructor(peso, idade, membros, corpelo) {
        super(peso, idade, membros, corpelo);
    }
    setCorPelo(a) {
        this.corpelo = a;
    }
    locomover() {
        alert('Saltando');
    }
    alimentar() {
        alert('Mamando');
    }
    emitirSom() {
        alert('Som de mamífero');
    }
    usarBolsa() {
        alert('Usou a bolsa');
    }
}

class cachorro extends mamifero {
    constructor(peso, idade, membros, corpelo) {
        super(peso, idade, membros, corpelo);
    }
    setCorPelo(a) {
        this.corpelo = a;
    }
    locomover() {
        alert('Correndo');
    }
    alimentar() {
        alert('Mamando');
    }
    emitirSom() {
        alert('auauau');
    }
    enterrarOsso() {
        alert('Enterrou um osso');
    }
    abanarCola() {
        alert('Abanou a cola');
    }
}

class cobra extends reptil {
    constructor(peso, idade, membros, corescamas) {
        super(peso, idade, membros, corescamas);
    }
}

class tartaruga extends reptil {
    constructor(peso, idade, membros, corescamas) {
        super(peso, idade, membros, corescamas);
    }
    locomover() {
        alert('Andando bem devagar');
    }
}

class goldfish extends peixe {
    constructor(peso, idade, membros, corescamas) {
        super(peso, idade, membros, corescamas);
    }
}

class arara extends ave {
    constructor(peso, idade, membros, corpenas) {
        super(peso, idade, membros, corpenas);
    }
}

var cach = new cachorro();
cach.setPeso(10);
cach.setIdade(2);
cach.setMembros(4);
cach.locomover();
cach.alimentar();
cach.emitirSom();
cach.abanarCola();
cach.enterrarOsso();

var cang = new canguru();
cang.setPeso(10);
cang.setIdade(2);
cang.setMembros(4);
cang.locomover();
cang.alimentar();
cang.emitirSom();
cang.usarBolsa();

var cobr = new cobra();
cobr.setPeso(10);
cobr.setIdade(2);
cobr.setMembros(4);
cobr.locomover();
cobr.alimentar();
cobr.emitirSom();

var tar = new tartaruga();
tar.setPeso(10);
tar.setIdade(2);
tar.setMembros(4);
tar.locomover();
tar.alimentar();
tar.emitirSom();

var gold = new goldfish();
gold.setPeso(1);
gold.setIdade(12);
gold.setMembros(3);
gold.locomover();
gold.alimentar();
gold.emitirSom();
gold.soltarBolhas();

var ara = new arara();
ara.setPeso(10);
ara.setIdade(2);
ara.setMembros(4);
ara.locomover();
ara.alimentar();
ara.emitirSom();
ara.fazerNinho();