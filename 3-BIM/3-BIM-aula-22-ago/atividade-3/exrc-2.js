let naipes = ['paus','ouros','espadas','corações'];
let resp = 'n';
while( resp == 'n'){
    cartaGerada = new Carta( Math.ceil(Math.random()*12)+1, naipes[Math.floor(Math.random()*3)]);
    resp = prompt("Está é sua carta => "+cartaGerada.exibir());
}

