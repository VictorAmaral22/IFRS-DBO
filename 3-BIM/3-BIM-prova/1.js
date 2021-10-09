function carta() {
    this.numeros = ['Ás',2,3,4,5,6,7,8,9,'J','Q','K'];
    this.naipes = ['Paus','Espadas','Ouros','Corações'];
    this.exibir = function() {
        alert('Pense numa carta do baralho...');
        var cN = Math.ceil(Math.random()*11);
        var cP = Math.ceil(Math.random()*3);
        var definitiva = 'Sua carta é '+this.numeros[cN]+' de '+this.naipes[cP]+' ?(responda com n ou s';
        return prompt(definitiva);
    }
}
let resp = 'n';
var carta1 = new carta;
while( resp != 's' && resp != 'S' ){
    resp = carta1.exibir();
}
if(resp == 's' || resp == 'S'){
    alert('AEEEEE!!');
}