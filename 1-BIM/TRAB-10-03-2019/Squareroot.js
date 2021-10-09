// squareroot.js // 0.4 pts

// 0.1 pts // easy
let n1 = 9;
let sqrt;
// your algorithm here
sqrt = Math.sqrt(n1);
console.log(sqrt); // 3
console.assert(sqrt === 3);

////////////////////////////////////

// 0.1 pts // medium
let n2 = 12;
// your algorithm here
//not working
sqrt = n2 ** (1 / 2);
// Math.sqrt not allowed
console.log(sqrt); // aproximadamente 3.4641
console.assert(sqrt >= 3.4640 && sqrt <= 3.4642);

/////////////////////////////////////

// 0.2 pts // hard
let n3 = 55;
// your algorithm here
//not working
guess = [1];
c = 1;

while (true) {
    if ((guess[c - 1] * guess[c - 1]) > n3 - 0.5 && (guess[c - 1] * guess[c - 1]) <= n3) {
        break;
    }
    guess[c] = (guess[c - 1] + n3 / guess[c - 1]) / 2;
    c++;
}
sqrt = guess[c - 1];
// Math and operator power (**) are not allowed
console.log(sqrt); // aproximadamente 7.4161
// tip: try a well known algorithm like the babylonian method
console.assert(sqrt >= 7.4160 && sqrt <= 7.4162);

///////////////////////////////