let imgs = [ 
    'img/1200px-Umbrella_Corporation_logo.png',
    'img/albert-wesker-trench-coat-850x1300-850x1300.png',
    'img/green.png',
    'img/Leon_2_re4_professional_render_by_allan_valentine-d599ov9.png',
    'img/Nemesis0.png',
    'img/RE6_Chris.png',
    'img/REDSJill.png'
];

let creditos = 0;
document.getElementById('cr').innerHTML = 'Seus créditos: R$ '+creditos;

let aposta = 0;
document.getElementById('ap').innerHTML = 'Sua aposta: R$ '+aposta;

let c1;
let c2;
let c3;

function ganhou(){
    if( c1 == 0 ){
        if( aposta == 0 ){
            creditos += 1;
        } else {
        creditos += 1*aposta;
        }
    }
    if( c1 == 1 ){
        if( aposta == 0 ){
            creditos += 2;
        } else {
        creditos += 2*aposta;
        }
    }
    if( c1 == 2 ){
        if( aposta == 0 ){
            creditos += 3;
        } else {
        creditos += 3*aposta;
        }
    }
    if( c1 == 3 ){
        if( aposta == 0 ){
            creditos += 4;
        } else {
        creditos += 4*aposta;
        }
    }
    if( c1 == 4 ){
        if( aposta == 0 ){
            creditos += 5;
        } else {
        creditos += 5*aposta;
        }
    }
    if( c1 == 5 ){
        if( aposta == 0 ){
            creditos += 6;
        } else {
        creditos += 6*aposta;
        }
    }
    if( c1 == 6 ){
        if( aposta == 0 ){
            creditos += 7;
        } else {
        creditos += 7*aposta;
        }
    }
    document.getElementById('cr').innerHTML = 'Seus créditos: R$ '+creditos;
}

function trocarImg(){
    c1 = Math.ceil(Math.random()*6);
    c2 = Math.ceil(Math.random()*6);
    c3 = Math.ceil(Math.random()*6);

    document.querySelector('img:nth-of-type(1)').src = imgs[c1];
    document.querySelector('img:nth-of-type(2)').src = imgs[c2];
    document.querySelector('img:nth-of-type(3)').src = imgs[c3];

    if( c1 == c2 && c1 == c3 ){
        alert('PARABÉNS!!!\nVocê vençeu!');
        ganhou();
        aposta = 0;
        document.getElementById('ap').innerHTML = 'Sua aposta: R$ '+aposta;
    } else {
        aposta = 0;
        document.getElementById('ap').innerHTML = 'Sua aposta: R$ '+aposta;
    }
}

function apostar() {
    aposta = parseInt(prompt('Digite o valor da tua aposta: '));
    if( aposta > creditos ){
      alert('Você apostou mais do que podes pagar. tá maluco??\nSua aposta foi reduzida para o valor total de créditos que tu tinhas.');
      aposta = creditos;
      creditos = 0;
      document.getElementById('ap').innerHTML = 'Sua aposta: R$ '+aposta;
      document.getElementById('cr').innerHTML = 'Seus créditos: R$ '+creditos; 
    } else {
        creditos -= aposta;
        document.getElementById('ap').innerHTML = 'Sua aposta: R$ '+aposta;
        document.getElementById('cr').innerHTML = 'Seus créditos: R$ '+creditos;
    }
}