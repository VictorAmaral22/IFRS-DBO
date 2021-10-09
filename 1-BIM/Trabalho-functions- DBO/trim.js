// trim.js // 0.4 pts

// 0.1 pts // easy
// unrestricted

function trimLeft(txt) {
    let t = txt;
    for (; t.charAt(0) === " ";) {
        t = t.substring(1, t.length + 1);
    }
    return t;
}

let txt = '   palavra   ';
txt = trimLeft(txt);
console.log(txt); // palavra   
console.log(txt === 'palavra   ');
console.log(trimLeft(' a') === 'a');
console.log(trimLeft('                 a') === 'a');
console.log(trimLeft('a       ') === 'a       ');
console.log(trimLeft(' a a ') === 'a a ');
console.log(trimLeft('     ') === '');
console.log(trimLeft('') === '');

// 0.2 pts // medium
// String, Number, RegExp, Math and Array methods, every built-in function not allowed
// except Array.length, Array[index], String.length, String.charAt and String[index]

function trimRight(txt) {
    let a = [];
    let c = 0;
    while (c <= txt.length - 1) {
        a[c] = txt.charAt(c);
        c++
    }
    for (c = a.length - 1; a[c] === " "; c--) {
        a[c] = '';
    }
    let n = '';
    for (c = a.length - 1; c >= 0; c--) {
        n = a[c] + n;
    }
    return n;
}

console.log(trimRight('   palavra   ') === '   palavra');
console.log(trimRight('ifrs  ') === 'ifrs');
console.log(trimRight('ifrs') === 'ifrs');
console.log(trimRight('  ifrs') === '  ifrs');
console.log(trimRight('  ifrs rio grande              ') === '  ifrs rio grande');
console.log(trimRight('     ') === '');
console.log(trimRight('') === '');

// 0.1 pts // easy to do, hard to figure it out how
// String, Number, RegExp, Math and Array methods, every **built-in** function not allowed
// **in the function body**, including [index] and length operations!
// just one line of code inside the function body (one `;`).

function trim(txt) {
    return trimRight(trimLeft(txt));
}

console.log(trim('   palavra   ') === 'palavra');
console.log(trim('ifrs  ') === 'ifrs');
console.log(trim('ifrs') === 'ifrs');
console.log(trim('  ifrs') === 'ifrs');
console.log(trim('  ifrs rio grande  ') === 'ifrs rio grande');
console.log(trim('        ') === '');
console.log(trim('') === '');