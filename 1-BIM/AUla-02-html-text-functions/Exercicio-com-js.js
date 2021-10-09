//Especificação
let mediana = function(vetor){
    if( Array.isArray(vetor) === true && vetor.length != 1 ){
        if( vetor.length%2 === 0 ){
            let x1 = (vetor.length)/2;
            let x2 = x1++;
            let media = (x1+x2)/2;
            return media;
        }
        if( vetor.length%3 === 0 ){
            let media = (((vetor.length-1)/2)+1);
            return media;
        }      
    }
}
const idades = [7, 15, 20, 22, 34, 40, 70];
//mediana
const m = mediana(idades);
console.log(m); //22
console.log(m === 22); //true
console.assert(m === 22);

console.log(mediana([34, 40, 82]) === 40);

const idades2 = [20, 24, 26, 40];

console.log(mediana(idades2)===25);
console.log(mediana([1000, 2000, 3000, 4000])===2500);
console.log(mediana([])===undefined);
console.log(mediana([123])===123);

