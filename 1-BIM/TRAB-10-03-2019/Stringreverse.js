// reverse.js // 0.3 pts

// 0.1 pts // easy
let str = 'divaloper';
// your algorithm here
let c = 0;
let c2 = str.length-1;
let s = [];
for( ; c2>=0 ; c++, c2-- ){
    s[c] = str.charAt(c2);
}
for ( str = '', c = 0; s.length-1 >= c; c++ ) {
    str = str + s[c];
}
console.log(str); // repolavid
console.assert(str === 'repolavid');

//////////////////////////

// 0.2 pts // medium
str = 'programmer';
// your algorithm here
for(let i = ['',0] ;i[1] <= str.length+1 ; i[1] +=1 ){
    if (i[1] <= str.length){
        i[0] = str.charAt(i[1]) + i[0];
    }
    if (i[1] === str.length + 1){
        str = i[0];
    }
}
// extra variables or constants are not allowed
// except "let i" in the "for"
console.log(str); // remmargorp
console.assert(str === 'remmargorp');

//////////////////////////
