class dado {
    constructor(numero) {
        this.n = numero;
    }
    jogarDado() {
        this.n = 1;
        while (true) {
            alert('Começa o jogo!');
            console.log('-------------------')
            for (let c = 0; c < 10; c++) {
                this.n = (Math.round(Math.random() * 5)) + 1;
                console.log(this.n);
                if (this.n == 6) {
                    alert('Meus parabéns! Ganhastes na ' + (c++) + ' tentantiva..');
                    break;
                }
                if (c == 9) {
                    alert('Infelizmente vc perdeu ;-;');
                }
            }
            if (prompt('Deseja continuar jogando?') == 'n') {
                break;
            }
        }
    }
}

var Dado = new dado();
Dado.jogarDado();