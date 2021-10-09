var aluno = function(provas,trabalhos){
    this.notaProvas = provas;
    this.notaTrabalhos = trabalhos;
}

aluno.prototype.calcularMedia = function(){
    return (this.notaProvas+this.notaTrabalhos)/2;
}

var notaP1 = parseInt(prompt('Digite a nota das provas do aluno 1: '));
var notaT1 = parseInt(prompt('Digite a nota dos trabalhos do aluno 1: '));
var aluno1 = new aluno(notaP1,notaT1);

var notaP2 = parseInt(prompt('Digite a nota das provas do aluno 2: '));
var notaT2 = parseInt(prompt('Digite a nota dos trabalhos do aluno 2: '));
var aluno2 = new aluno(notaP2,notaT2);

alert('Aluno 1: \nProvas - '+aluno1.notaProvas+'\nTrabalhos - '+aluno1.notaTrabalhos+'\nMédia - '+aluno1.calcularMedia()+'\n\nAluno 2: \nProvas - '+aluno2.notaProvas+'\nTrabalhos - '+aluno2.notaTrabalhos+'\nMédia - '+aluno2.calcularMedia());