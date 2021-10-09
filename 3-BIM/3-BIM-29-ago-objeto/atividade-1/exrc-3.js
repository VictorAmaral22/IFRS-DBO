let nomes = [];
for(let c = 0; c<=4 ; c++){
    nomes[c] = pizzas[c].nome;
    nomes.sort();
}
alert('Pizzas: \n\n '+nomes[0]+', '+nomes[1]+', '+nomes[2]+', '+nomes[3]+', '+nomes[4]);

let b = [];
for(let c = 0; c<=4 ; c++){
    b[c] = pizzas[c].preco+' '+pizzas[c].nome;
    b.sort();
}
alert('Pizzas (ordenadas por preço): \n\n R$'+b[0]+', R$'+b[1]+', R$'+b[2]+', R$'+b[3]+', R$'+b[4]+'.');

for(let c = 0; c<=4 ; c++){
    pizzas[c].ingredientes.sort();
}