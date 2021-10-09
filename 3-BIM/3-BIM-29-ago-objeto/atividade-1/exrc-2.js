let pizzas = [];
for(let c = 0; c<=4 ; c++){
    let nome = prompt('Digite o nome da Pizza '+(c+1)+':');
    let preco = parseInt(prompt('Digite o preco da Pizza '+(c+1)+':'));
    let tamanho = prompt('Digite o tamanho da Pizza '+(c+1)+':');

    pizzas[c] = new pizza(nome, preco, tamanho);
    pizzas[c].addIng();
    alert(nome+' (R$'+preco+'), '+tamanho+'\nIngredientes:\n'+pizzas[c].ingredientes);
}
for(let c = 0; c<=4 ; c++){
    if( pizzas[c].ingredientes.indexOf('tomate') != -1 ){
        delete(pizzas[c].ingredientes[(pizzas[c].ingredientes.indexOf('tomate'))]);
    }
}

let ovo = 'As seguinte Pizzas possuem ovo: \n\n';
for(let c = 0; c<=4 ; c++){
    if( pizzas[c].ingredientes.indexOf('ovo') != -1 ){
        ovo += '- '+pizzas[c].nome+'\n';
    }
    if( c == 4 ){
        alert(ovo);
    }
}