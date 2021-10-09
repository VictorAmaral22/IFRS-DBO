let vendas = function(totalVendas, totalDescontos){
    this.tvendas = totalVendas;
    this.tdescontos = totalDescontos;
};

vendas.prototype.calculaFaturamentos = function(){
    return this.tvendas-this.tdescontos; 
}