console.log('sudoku');

clean();
//document.querySelector('body > table > tr > td#abc').textContent = vetor[0][0];
//document.querySelector('td#abc').innerHTML = 'aaaaaa'

let valido = 0;
let z = 1;
let counter = 0;
console.log(counter);
const buttonEASY = document.querySelector('button:nth-of-type(1)');
buttonEASY.addEventListener('click', Easy);

const buttonMEDIUM = document.querySelector('button:nth-of-type(2)');
buttonMEDIUM.addEventListener('click', Medium);

const buttonHARD = document.querySelector('button:nth-of-type(3)');
buttonHARD.addEventListener('click', Hard);

const buttonHARDCORE = document.querySelector('button:nth-of-type(4)');
buttonHARDCORE.addEventListener('click', HardCORE);

const buttoncheck = document.querySelector('button:nth-of-type(5)');
buttoncheck.addEventListener('click', check);

/*
function Easy(e) {
    if (counter === 0) {
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').textContent = 1;
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').classList.add('fixo');
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').textContent = 3;
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').classList.add('fixo');
        counter += 2;
        valido = 1;
    }
}
*/

function clean() {
    for(let c = 2; c<=5; c++) {
        for (let c1 = 1; c1 <= 4; c1++) {
            document.querySelector('tr:nth-of-type('+c+') > td:nth-of-type('+c1+')').textContent = '+';
            document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList.remove('fixo');
        }
    }
}

function Easy(e) {
    clean();
    let v = {
            'tr':[2,3,4,5],
            'td':[1,2,3,4],
            'num':[1,2,3,4]
        };
    let random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random()*4)] ];
    let random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    console.log(random1);
    console.log(random2);
    while ( (random1[0] === random2[0] && random1[1] === random2[1]) || (random1[0] === random2[0] && random1[2] === random2[2]) || (random1[1] === random2[1] && random1[2] === random2[2]) ){
        console.log('repetindoo');
        random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
        random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    }
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').textContent = random1[2];
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').classList.add('fixo');
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').textContent = random2[2];
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').classList.add('fixo');
    valido = 1;
}

function Medium(e) {
    clean();
    let v = {
        'tr': [2, 3, 4, 5],
        'td': [1, 2, 3, 4],
        'num': [1, 2, 3, 4]
    };
    let random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    let random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    console.log(random1);
    console.log(random2);
    while ((random1[0] === random2[0] && random1[1] === random2[1]) || (random1[0] === random2[0] && random1[2] === random2[2]) || (random1[1] === random2[1] && random1[2] === random2[2])) {
        console.log('repetindoo');
        random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
        random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    }
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').textContent = random1[2];
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').classList.add('fixo');
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').textContent = random2[2];
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').classList.add('fixo');
    valido = 1;
}

function Hard(e) {
    clean();
    let v = {
        'tr': [2, 3, 4, 5],
        'td': [1, 2, 3, 4],
        'num': [1, 2, 3, 4]
    };
    let random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    let random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    console.log(random1);
    console.log(random2);
    while ((random1[0] === random2[0] && random1[1] === random2[1]) || (random1[0] === random2[0] && random1[2] === random2[2]) || (random1[1] === random2[1] && random1[2] === random2[2])) {
        console.log('repetindoo');
        random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
        random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    }
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').textContent = random1[2];
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').classList.add('fixo');
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').textContent = random2[2];
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').classList.add('fixo');
    valido = 1;
}


function HardCORE(e) {
    clean();
    let v = {
        'tr': [2, 3, 4, 5],
        'td': [1, 2, 3, 4],
        'num': [1, 2, 3, 4]
    };
    let random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    let random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    console.log(random1);
    console.log(random2);
    while ((random1[0] === random2[0] && random1[1] === random2[1]) || (random1[0] === random2[0] && random1[2] === random2[2]) || (random1[1] === random2[1] && random1[2] === random2[2])) {
        console.log('repetindoo');
        random1 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
        random2 = [v.tr[parseInt(Math.random() * 4)], v.td[parseInt(Math.random() * 4)], v.num[parseInt(Math.random() * 4)]];
    }
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').textContent = random1[2];
    document.querySelector('tr:nth-of-type(' + random1[0] + ') > td:nth-of-type(' + random1[1] + ')').classList.add('fixo');
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').textContent = random2[2];
    document.querySelector('tr:nth-of-type(' + random2[0] + ') > td:nth-of-type(' + random2[1] + ')').classList.add('fixo');
    valido = 1;
}

const teste01 = document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)');
teste01.addEventListener('wheel', abteste01)

function abteste01(e) {
    if (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste02 = document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)');
teste02.addEventListener('wheel', abteste02)

function abteste02(e) {
    if (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste03 = document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)');
teste03.addEventListener('wheel', abteste03)

function abteste03(e) {
    if (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste04 = document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)');
teste04.addEventListener('wheel', abteste04)

function abteste04(e) {
    if (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}
// segunda fila
const teste11 = document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)');
teste11.addEventListener('wheel', abteste11)

function abteste11(e) {
    if (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste12 = document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)');
teste12.addEventListener('wheel', abteste12)

function abteste12(e) {
    if (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste13 = document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)');
teste13.addEventListener('wheel', abteste13)

function abteste13(e) {
    if (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste14 = document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)');
teste14.addEventListener('wheel', abteste14)

function abteste14(e) {
    if (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}
// terceira fila
const teste21 = document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)');
teste21.addEventListener('wheel', abteste21)

function abteste21(e) {
    if (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste22 = document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)');
teste22.addEventListener('wheel', abteste22)

function abteste22(e) {
    if (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste23 = document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)');
teste23.addEventListener('wheel', abteste23)

function abteste23(e) {
    if (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste24 = document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)');
teste24.addEventListener('wheel', abteste24)

function abteste24(e) {
    if (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}
// quarta fila
const teste31 = document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)');
teste31.addEventListener('wheel', abteste31)

function abteste31(e) {
    if (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste32 = document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)');
teste32.addEventListener('wheel', abteste32)

function abteste32(e) {
    if (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste33 = document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)');
teste33.addEventListener('wheel', abteste33)

function abteste33(e) {
    if (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

const teste34 = document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4)');
teste34.addEventListener('wheel', abteste34)

function abteste34(e) {
    if (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4)').className === '' && valido === 1) {
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4 )').textContent = z
        z = z + 1
        if (z === 5) {
            z = 1
        }
    }
}

function check(e) {
    a = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)').textContent +
        (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)').textContent +
            (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)').textContent))));

    b = (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)').textContent +
        (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)').textContent +
            (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)').textContent))));

    c = (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)').textContent +
            (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').textContent))));

    d = (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)').textContent +
        (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4)').textContent))));

    e = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)').textContent))));

    f = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)').textContent))));

    g = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)').textContent))));

    h = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4)').textContent))));

    /*
    i = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(1)').textContent +
        (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(2)').textContent +
            (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(2)').textContent))));

    j = (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(1)').textContent + (
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(1)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(2)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(2)').textContent))));

    k = (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(3)').textContent + (
        document.querySelector('tr:nth-of-type(3) > td:nth-of-type(3)').textContent +
        (document.querySelector('tr:nth-of-type(2) > td:nth-of-type(4)').textContent +
            (document.querySelector('tr:nth-of-type(3) > td:nth-of-type(4)').textContent))));

    l = (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(3)').textContent + (
        document.querySelector('tr:nth-of-type(5) > td:nth-of-type(3)').textContent +
        (document.querySelector('tr:nth-of-type(4) > td:nth-of-type(4)').textContent +
            (document.querySelector('tr:nth-of-type(5) > td:nth-of-type(4)').textContent))));
    */
    console.log(a+" - a ");
    console.log(b + " - b ");
    console.log(c + " - c ");
    console.log(d + " - d ");
    console.log(e + " - e ");
    console.log(f + " - f ");
    console.log(g + " - g ");
    console.log(h + " - h ");

    if (a.indexOf('1') !== -1 && a.indexOf('2') !== -1 && a.indexOf('3') !== -1 && a.indexOf('4') !== -1
        && b.indexOf('1') !== -1 && b.indexOf('2') !== -1 && b.indexOf('3') !== -1 && b.indexOf('4') !== -1
        && c.indexOf('1') !== -1 && c.indexOf('2') !== -1 && c.indexOf('3') !== -1 && c.indexOf('4') !== -1
        && d.indexOf('1') !== -1 && d.indexOf('2') !== -1 && d.indexOf('3') !== -1 && d.indexOf('4') !== -1
        && e.indexOf('1') !== -1 && e.indexOf('2') !== -1 && e.indexOf('3') !== -1 && e.indexOf('4') !== -1
        && f.indexOf('1') !== -1 && f.indexOf('2') !== -1 && f.indexOf('3') !== -1 && f.indexOf('4') !== -1
        && g.indexOf('1') !== -1 && g.indexOf('2') !== -1 && g.indexOf('3') !== -1 && g.indexOf('4') !== -1
        && h.indexOf('1') !== -1 && h.indexOf('2') !== -1 && h.indexOf('3') !== -1 && h.indexOf('4') !== -1
        /* && i.indexOf('1') !== -1 && i.indexOf('2') !== -1 && i.indexOf('3') !== -1 && i.indexOf('4') !== -1
        && j.indexOf('1') !== -1 && j.indexOf('2') !== -1 && j.indexOf('3') !== -1 && j.indexOf('4') !== -1
        && k.indexOf('1') !== -1 && k.indexOf('2') !== -1 && k.indexOf('3') !== -1 && k.indexOf('4') !== -1 */
    ) {
        console.log('venceu');
    } else
        console.log('perdeu');
}
