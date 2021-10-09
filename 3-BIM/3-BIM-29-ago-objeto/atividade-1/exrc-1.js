let pizza = function(nom, pre, tam){
    this.nome = nom;
    this.preco = pre;
    this.tamanho = tam;
    this.ingredientes = [];
}

pizza.prototype.addIng = function(){
    let i = '';
    let c = 0;
    while( true ){
        i = prompt('Digite o '+(c+1)+'º ingrediente da pizza: ( caso tiver digitado todos, aperte "n")');
        if( i == 'n' ){
            break;
        }
        this.ingredientes[c] = i;
        c++
    }
}

pizza.prototype.deleteIng = function(){
    let excl = prompt('Digite o nome do ingrediente desejado: ');
    delete(this.ingredientes[this.ingredientes.indexOf(excl)]);
}

pizza.prototype.returnIng = function(){
    let c = 0;
    let string = 'Os ingredientes são: ';
    while( c < this.ingredientes.length-1){
        string += this.ingredientes[c];
        if( c != this.ingredientes.length-1 ){
            string += ',';
        }
    }
    return string;
}