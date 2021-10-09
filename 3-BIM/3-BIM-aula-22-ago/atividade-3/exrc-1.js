let Carta = function(pNumero, pNaipe){
    this.numero = pNumero;
    this.naipe = pNaipe;
}

Carta.prototype.exibir = function(){
    return this.numero+' de '+this.naipe+'.';
}
