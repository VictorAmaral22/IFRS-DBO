// complex.js (0.5 pts)
console.log('complex.js');

function complex(real, imaginary) {
    return {
        real: real,
        imaginary: imaginary,
        soma: function(othercomplex) {
            return complex(this.real + othercomplex.real,
                this.imaginary + othercomplex.imaginary);
        },
        subtracao: function(othercomplex) {
            return complex(this.real - othercomplex.real,
                this.imaginary - othercomplex.imaginary);
        },
        conjugado: function() {
            return `${real} ${(-1) * imaginary}i`;
        }
    };
}

// SOMA
let r1 = complex(2, 3);
console.log(r1.real === 2); // true
console.log(r1.imaginary === 3); // true

let r2 = complex(3, 5);
console.log(r2.real === 3); // true
console.log(r2.imaginary === 5); // true

let r3 = r1.soma(r2);
console.log(r3.real === 5); // true
console.log(r3.imaginary === 8); // true

r1 = complex(300, -1);
console.log(r1.real === 300); // true
console.log(r1.imaginary === -1); // true

r2 = complex(100, -200);
console.log(r2.real === 100); // true
console.log(r2.imaginary === -200); // true

r3 = r1.soma(r2);
console.log(r3.real === 400); // true
console.log(r3.imaginary === -201); // true
// ----

// SUBTRAÇÃO
const r4 = complex(22, 1);
console.log(r4.real === 22); // true
console.log(r4.imaginary === 1); // true

const r5 = complex(544, -10);
console.log(r5.real === 544); // true
console.log(r5.imaginary === -10); // true

const r6 = r4.subtracao(r5);
console.log(r6.real === -522); // true
console.log(r6.imaginary === 11); // true
// -----

// CONJUGADO
const r7 = complex(22, 33);
console.log(r7.conjugado()); // 22 -33i

console.log(r3.conjugado()); // 400 201i
console.log(r6.conjugado()); // -522 -11i
// ----
