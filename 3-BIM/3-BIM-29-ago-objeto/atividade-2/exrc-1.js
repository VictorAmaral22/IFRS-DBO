let filmes = [
    'Batman begins',
    'Batman o cavaleiro das trevas',
    'Batman o cavaleiro das trevas ressurge',
    'Homem aranha 2',
    'Homem aranha no aranhaverso',
];

function mostrar(){
    let vinte = 'Os seguintes filmes possuem mais de 20 caracteres: \n\n';
    for(let c = 0; c < filmes.length ; c++){
        if( filmes[c].length >= 20 ){
            vinte += '- '+filmes[c]+'\n';
        }
    }
    alert(vinte);
}
mostrar();

function removLast(){
    alert('Este é o último filme: '+filmes[4]);
    filmes.pop();
}
removLast();