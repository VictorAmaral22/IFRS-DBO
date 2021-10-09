// caesar.js // 1.0 pts

// 0.1 pts // easy
// encrypt a string
// unrestricted
// input: a to z lowercase only,
// without accents, special chars (symbols) and spaces

let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let b = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function finding(l, p) {
    let c = 0;
    let f = '';
    for (; c <= l.length - 1; c++) {
        if (l[c] === p) {
            f = c;
        }
    }
    if (f === '') {
        f = -1;
    }
    return f;
}

//ENCRYPT
function alphabet(p, n) {
    if ((finding(a, p) === -1) && (finding(b, p) === -1)) {
        return p;
    }
    if (finding(b, p) != -1) {
        let c1 = finding(b, p) + n;
        if (c1 > 25) {
            c1 = c1 - 26;
        }
        return a[c1];
    }
    if (finding(a, p) != -1) {
        let c1 = finding(a, p) + n;
        if (c1 > 25) {
            c1 = c1 - 26;
        }
        return a[c1];
    }
}

function encrypt(msg, shift) {
    let b = '';
    let c = 0;
    while (c < msg.length) {
        b = b + alphabet(msg.charAt(c), shift);
        c++
    }
    return b;
}
//------

//DECRYPT
function alphabet2(p, n) {
    if ((finding(a, p) === -1) && (finding(b, p) === -1)) {
        return p;
    }
    if (finding(b, p) != -1) {
        let c1 = finding(b, p) - n;
        if (c1 < 0) {
            c1 = 26 - (c1 * -1);
        }
        return a[c1];
    }
    if (finding(a, p) != -1) {
        let c1 = finding(a, p) - n;
        if (c1 < 0) {
            c1 = 26 - (c1 * -1);
        }
        return a[c1];
    }
}

function decrypt(msg, shift) {
    let b = '';
    let c = 0;
    while (c < msg.length) {
        b = b + alphabet2(msg.charAt(c), shift);
        c++
    }
    return b;
}
//-------

let msg = 'tads';
let shift = 1;
let resp = encrypt(msg, shift);
console.log(resp); // ubet
console.log(resp === 'ubet'); // true
console.assert(resp === 'ubet');

resp = encrypt(msg, 9);
console.log(resp); // cjmb
console.log(resp === 'cjmb'); // true
console.assert(resp === 'cjmb');

// 0.2 pts // medium
// encrypt a string
// unrestricted
// input: any character
// desconsider any non-a-to-z (accented letters, spaces, special chars (symbols), etc) to encrypt
// uppercase letters inputs must output lowercase letters
console.assert(encrypt('BANANA', 9) === 'kjwjwj');
console.assert(encrypt('teste criptografia', 9) === 'cnbcn larycxpajorj');
console.assert(encrypt('@#%%&*^nEo*<>;; @', 15) === '@#%%&*^ctd*<>;; @');

// 0.2 pts // medium
// decrypt a string
// unrestricted
// input: any character
// desconsider any non-a-to-z (spaces, special chars (symbols), etc) to decrypt
// output always in lowercase
console.assert(decrypt('kjwjwj', 9) === 'banana');
console.assert(decrypt('cnbcn larycxpajorj', 9) === 'teste criptografia');
console.assert(decrypt('@#%%&*^ctd*<>;; @', 15) === '@#%%&*^neo*<>;; @');

// 0.5 pts // hard
// encrypt and decrypt a string
// input: any character
// desconsider any non-a-to-z (spaces, special chars (symbols), etc)
// output always in lowercase
// String, Number, RegExp, Math and Array methods, every built-in function not allowed
// except Array.length, Array[index], String.length, String.charAt and String[index]
console.assert(encrypt('@# hard %çá', 30) === '@# levh %çá');
console.assert(decrypt('@# levh %çá', 30) === '@# hard %çá');
console.assert(encrypt('@# HARD %çá', 30) === '@# levh %çá');