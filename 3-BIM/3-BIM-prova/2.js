var Jokenpo = {
    pPlayer: 0,
    pPc: 0
}

var a = 'sim';
var game;
while (a === 'sim') {
    Jokenpo.pPlayer = 0;
    Jokenpo.pPc = 0;
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
                alert('EMPATE\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Papel\nPC (' + Jokenpo.pPc + '): ' + 'Tesoura');
                game = false;
            }
        }

        //Player joga Pedra
        if (jogadaPlayer == 2) {
            if (jogadaPc == 1) {
                Jokenpo.pPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pPc + '): ' + 'Papel');
                game = false;
            }
            if (jogadaPc == 2) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pPc + '): ' + 'Pedra');
            }
            if (jogadaPc == 3) {
                Jokenpo.pPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Pedra\nPC (' + Jokenpo.pPc + '): ' + 'Tesoura');
            }
        }

        //Player joga Tesoura
        if (jogadaPlayer == 3) {
            if (jogadaPc == 1) {
                Jokenpo.pPlayer += 1;
                alert('VENÇEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pPc + '): ' + 'Papel');
            }
            if (jogadaPc == 2) {
                Jokenpo.pPc += 1;
                alert('PERDEU\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pPc + '): ' + 'Pedra');
                game = false;
            }
            if (jogadaPc == 3) {
                alert('EMPATE\n\nVocê (' + Jokenpo.pPlayer + '): ' + 'Tesoura\nPC (' + Jokenpo.pPc + '): ' + 'Tesoura');
            }
        }
    }
    alert('Placar: \n\nVocê (' + Jokenpo.pPlayer + ')\nPC (' + Jokenpo.pPc + ')');
    a = prompt('Deseja continuar jogando? Se sim, digite (sim)');
}