let preco1 = parseInt(prompt('Digite o preço do produto A: '));
let desconto1 = parseInt(prompt('Digite o desconto do produto A: '));

let venda1 = new vendas(preco1 , desconto1);
let faturamento = venda1.calculaFaturamentos();

let preco2 = parseInt(prompt('Digite o preço do produto B: '));
let desconto2 = parseInt(prompt('Digite o desconto do produto B: '));

let venda2 = new vendas(preco2 , desconto2);
let faturamento2 = venda2.calculaFaturamentos();

let totalVendas = faturamento + faturamento2;

alert('Venda 1 : \n Preço - '+venda1.tvendas+' \n Desconto - '+venda1.tdescontos+' \n Faturamento - '+faturamento+' \n \n Venda 2 : \n Preço - '+venda2.tvendas+' \n Desconto - '+venda2.tdescontos+' \n Faturamento - '+faturamento2);