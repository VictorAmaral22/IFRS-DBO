//A function é elevada (hoisting)
let twice = function(n) {
    console.log(n); //oi
    if(typeof(n) === 'number' ) {
        return 2 * n;
    }
    //Aqui no quokka fica cinza, porque não é executado
    if(typeof(n) === 'string' ) {
        return n * n;
    }
    if(Array.isArray(n)) {
        return n.concat(n)
    }
}

let x = [3, 5];
let r = twice(x);
console.log(r); //[3,5,3,5]

console.log('functions.js');

