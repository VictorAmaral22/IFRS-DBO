class Lutador {
    constructor(nome, nacionalidade, idade, altura, peso, categoria, vitorias, derrotas, empates) {
            this.nome = nome;
            this.nacionalidade = nacionalidade;
            this.idade = idade;
            this.altura = altura;
            this.peso = peso;
            this.categoria = categoria;
            this.vitorias = vitorias;
            this.derrotas = derrotas;
            this.empates = empates;
        }
        /*
        categoria() {
            if (this.peso < 52.2) {
                this.categoria = 'Inválido';
            }
            if (52.2 < this.peso && this.peso <= 70.3) {
                this.categoria = 'Leve';
            }
            if (70.3 < this.peso && this.peso <= 83.9) {
                this.categoria = 'Médio';
            }
            if (83.9 < this.peso && this.peso <= 120.2) {
                this.categoria = 'Pesado';
            }
            if (this.peso > 120.2) {
                this.categoria = 'Inválido';
            }
        }*/
    apresentar() {
        console.log('Este é o ' + this.nome + '! Ele é ' + this.nacionalidade + ', tem ' + this.idade + ' anos, tem ' + this.altura + ' metros de altura e pesa ' + this.peso + 'Kg.');
    }
    status() {
        console.log(this.nome + ' é um peso ' + this.categoria + ', tem ' + this.vitorias + ' vitórias, ' + this.derrotas + ' derrotas e ' + this.empates + ' empates!');
    }
    ganharLuta() {
        console.log(this.nome + ' vençeu a luta!');
        this.vitorias++;
    }
    perderLuta() {
        console.log(this.nome + ' perdeu a luta!');
        this.derrotas++;
    }
    empatarLuta() {
        console.log(this.nome + ' empatou a luta!');
        this.empates++;
    }
}

//luta
class Luta {
    constructor(desafiado, desafiante, round, aprovada) {
        this.desafiado = desafiado;
        this.desafiante = desafiante;
        this.round = round;
        this.aprovada = aprovada;
    }
    marcarLuta() {
        let aaa = prompt('Em que dia acontecerá a luta?');
        return aaa;
    }
    aprovarLuta() {
        if (this.desafiante.categoria == this.desafiado.categoria) {
            this.aprovada = true;
        } else {
            this.aprovada = false;
        }
    }
    lutar() {
        if (this.aprovada) {
            this.desafiante.apresentar();
            this.desafiado.apresentar();
            this.desafiante.status();
            this.desafiado.status();
            var r1 = 0;
            var r2 = 0;
            for (let c = 0; c < this.round; c++) {
                if (this.desafiante.vitorias > this.desafiado.vitorias) {
                    r1++;
                }
                if (this.desafiado.vitorias > this.desafiante.vitorias) {
                    r2++;
                }
            }
            if (r1 > r2) {
                this.desafiante.ganharLuta();
                this.desafiado.perderLuta();
            }
            if (r2 > r1) {
                this.desafiado.ganharLuta();
                this.desafiante.perderLuta();
            }
            if (r1 == r2) {
                this.desafiante.empatarLuta();
                this.desafiado.empatarLuta();
            }
        }
    }
}

//////////////////////////

var Lutadores = [1, 2, 3, 4, 5];
Lutadores[0] = new Lutador('João', 'Brasileiro', 33, 1.80, 80, 'Médio', 2, 1, 1);
Lutadores[1] = new Lutador('José', 'Brasileiro', 44, 1.80, 80, 'Médio', 3, 1, 1);
Lutadores[2] = new Lutador('John', 'Brasileiro', 23, 1.80, 80, 'Médio', 4, 2, 0);
Lutadores[3] = new Lutador('Josef', 'Brasileiro', 53, 1.80, 80, 'Médio', 5, 2, 1);
Lutadores[4] = new Lutador('Jericó', 'Brasileiro', 43, 1.80, 80, 'Médio', 6, 3, 0);

var Bah = new Luta(Lutadores[0], Lutadores[1], 3);
Bah.aprovarLuta();
Bah.lutar();