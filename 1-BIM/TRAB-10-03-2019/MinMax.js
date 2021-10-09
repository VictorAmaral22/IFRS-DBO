// minmax.js // 0.3 pts

// 0.1 pts // easy
let array1 = [5, 4, 6, 8, 4, 10, 8, 3, 2];
let min, max;
// your algorithm here
c1 = array1.length - 1;
max = 0;
//max
while (c1 >= 0) {
    if (max < array1[c1]) {
        max = array1[c1];
    }
    c1--;
}
//min
min = max;
c1 = array1.length - 1;
while (c1 >= 0) {
    if (min > array1[c1]) {
        min = array1[c1];
    }
    c1--
}
console.log(min); // 2
console.assert(min === 2);
console.log(max); // 10
console.assert(max === 10);

// 0.2 pts // medium
let array2 = [500, 40, 600, 80, 400, 100, 8000, 30, 2000];
// your algorithm here

//max
function mx(n) {
    return (n > max ? max = n : '');
}

c2 = array2.length - 1;
max = 0;
while (c2 >= 0) {
    mx(array2[c2]);
    c2--;
}
//min
function mn(n) {
    return (n < min ? min = n : '');
}

c2 = array2.length - 1;
min = max;
while (c2 >= 0) {
    mn(array2[c2]);
    c2--;
}

// if/else not allowed, Math methods not allowed
// tip: study ternary operator
console.log(min); // 30
console.assert(min === 30);
console.log(max); // 8000
console.assert(max === 8000);