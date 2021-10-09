var nomef = prompt('nome');
var sbf = parseInt(prompt('Salário Base'));
var comissaof = parseInt(prompt('COMISSAO'));
let funcionario = new funcionarios(nomef, sbf, 0, totalVendas, comissaof);
funcionario.calcularSalario();

alert('Salario = '+funcionario.salarioFinal);
alert('Comissão = '+funcionario.calcularComissao());