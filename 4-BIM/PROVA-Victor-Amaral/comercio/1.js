/*
14 - Crie uma pasta denominada comercio.No interior da pasta, crie as seguintes
aplicações em JavaScript:

1. Elabore um programa para realizar vendas de produtos, para isso escreva uma função construtora para definir de uma Venda, contendo as seguintes propriedades e métodos:

a) propriedades: totalVendas e totalDescontos, ambas numéricas;
b) método: calculaFaturamento o qual retorna o total de vendas menos os descontos concedidos.No mesmo programa, declare dois objetos do tipo Venda.

a) leia os totais de vendas e descontos para cada objeto.
b) Mostre na tela o faturamento obtido em cada venda.
*/

class Venda {
    constructor(totalVendas,totalDescontos){
        this.totalVendas = totalVendas;
        this.totalDescontos = totalDescontos;
    }
    calcularFaturamento(){
        return (this.totalVendas - this.totalDescontos);
    }
}

var venda1 = new Venda(100,20);
var venda2 = new Venda(60, 2);

//totais
alert('O total de vendas da venda1 foi de R$'+venda1.totalVendas+'. De descontos foi R$'+venda1.totalDescontos);
alert('O total de vendas da venda2 foi de R$' + venda2.totalVendas + '. De descontos foi R$' + venda2.totalDescontos);

//fatur
alert('O faturamento da venda1 foi de R$' + venda1.calcularFaturamento());
alert('O faturamento da venda2 foi de R$' + venda2.calcularFaturamento());