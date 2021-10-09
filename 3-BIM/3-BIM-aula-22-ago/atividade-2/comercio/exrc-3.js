/* 
funcionario = {
    nome: '',
    salarioBase: 0,
    salarioFinal: 0,
    totalVendas: 0,
    comissao: 0
}

*/

let funcionarios = function(nome, salarioBase, salarioFinal, totalVendas, comissao){
    this.nome = nome;
    this.salarioBase = salarioBase;
    this.salarioFinal = salarioFinal;
    this.totalVendas = totalVendas;
    this.comissao = comissao;
};

funcionarios.prototype.calcularComissao = function(){
    return (this.totalVendas*this.comissao)/100; 
}

funcionarios.prototype.calcularSalario = function() {
    this.salarioFinal = this.salarioBase + this.calcularComissao();
}
