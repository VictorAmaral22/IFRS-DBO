// padleft.js // 0.4 pts
// String existing pad methods not allowed

// 0.1 pts // easy
let txt = 'pad';
let size = 10;
let char = '-';
// your algorithm here

let tam = size - txt.length;
while (tam > 0) {
    txt = char + txt;
    tam--;
}
//
console.log(txt); // -------pad
console.assert(txt === '-------pad');

///////////////////////////////

// 0.1 pts // medium
txt = 'medium';
size = 10;
char = 'm';

// your algorithm here

tam = size - txt.length;
let simb = char;
while (simb.length < tam) {
    simb = `${simb}${char}`;
}
txt = `${simb}${txt}`;

// not allowed operator "+" and string methods, like "concat"
// use string templates (interpolation -i.e. strings between ``)
console.log(txt); // mmmmmedium
console.assert(txt === 'mmmmmedium');

/////////////////////////////////


// 0.2 pts // hard
txt = 'hard';
size = 15;
char = '\\o/';
// your algorithm here
tam = size - txt.length;
simb = '';
let chars = char.length;
let many = (tam / chars).toFixed(0) - 1;
for (; many > 0; many--) {
    simb = simb + char;
}
let c1 = 0;
for (let c = (tam - (simb.length)); c > 0; c1++ , c--) {
    simb = simb + char.charAt(c1);
}
txt = simb + txt;
console.log(txt); //  \o/\o/\o/\ohard
console.assert(txt === '\\o/\\o/\\o/\\ohard');

char = '-_';
// your algorithm here
txt = 'hard';
tam = size - txt.length;
simb = '';
chars = char.length;
many = (tam / chars).toFixed(0) - 1;
for (; many > 0; many--) {
    simb = simb + char;
}
c1 = 0;
for (let c = (tam - (simb.length)); c > 0; c1++ , c--) {
    simb = simb + char.charAt(c1);
}
txt = simb + txt;
console.log(txt);
console.assert(txt === '-_-_-_-_-_-hard');

///////////////////////////////////////////