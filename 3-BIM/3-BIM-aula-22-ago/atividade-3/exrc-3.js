let Jokenpo = {
    pontosPlayer: 0,
    pontosPc: 0,

    /*
    jogadaPlayer: function() {
        let jogada = parseInt(prompt('Faça a sua jogada: \n\nPapel - 1\nPedra - 2\nTesoura - 3'));
        while (jogada != 1 && jogada != 2 && jogada != 3) {
            jogada = parseInt(prompt('Papel - 1\nPedra - 2\nTesoura - 3'));
        }
        return jogada;
    },
    jogadaPc: function() {
        return jogada = Math.floor(Math.random() * 3) + 1;
    },
    jogo: function() {

        alert(jogadaPlayer + " player");
        alert(jogadaPc + " pc");
        //Player joga Papel
        if (jogadaPlayer == 1) {
            if (jogadaPc == 1) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
                game = false;
            }
        }

        //Player joga Pedra
        if (jogadaPlayer == 2) {
            if (jogadaPc == 1) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
                game = false;
            }
            if (jogadaPc == 2) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
            }
        }

        //Player joga Tesoura
        if (jogadaPlayer == 3) {
            if (jogadaPc == 1) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
                game = false;
            }
            if (jogadaPc == 3) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
            }
        }
    }*/

}

let a = 'sim';
let game;
while (a === 'sim') {
    Jokenpo.pontosPlayer = 0;
    Jokenpo.pontosPc = 0;
    game = true;
    while (game == true) {
        //player
        let jogadaPlayer = parseInt(prompt('Faça a sua jogada: \n\nPapel - 1\nPedra - 2\nTesoura - 3'));
        if (jogadaPlayer != 1 && jogadaPlayer != 2 && jogadaPlayer != 3) {
            alert('PERDEU \nVocê digitou uma opção inválida e perdeu a rodada.  ;-;')
            game = false;
        }

        //pc
        let jogadaPc = Math.floor(Math.random() * 3) + 1;

        //Player joga Papel
        if (jogadaPlayer == 1) {
            if (jogadaPc == 1) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
                game = false;
            }
        }

        //Player joga Pedra
        if (jogadaPlayer == 2) {
            if (jogadaPc == 1) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
                game = false;
            }
            if (jogadaPc == 2) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
            }
        }

        //Player joga Tesoura
        if (jogadaPlayer == 3) {
            if (jogadaPc == 1) {
                Jokenpo.pontosPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pontosPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Pedra');
                game = false;
            }
            if (jogadaPc == 3) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pontosPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pontosPc + '): ' + 'Tesoura');
            }
        }
    }
    alert('Placar: \n\nVocê (' + Jokenpo.pontosPlayer + ')\nPC (' + Jokenpo.pontosPc + ')');
    a = prompt('Deseja continuar jogando? Se sim, digite (sim)');
}