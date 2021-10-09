var nome = prompt('Diga o seu nome: ');
aluno.nome = nome;

var email = prompt('Diga o seu email: ');
aluno.email = email;

var turma = prompt('Diga o sua turma: ');
aluno.turma = turma;

var curso = prompt('Diga o seu curso: ');
aluno.curso = curso;

// Disciplina

var nome2 = prompt('Diga o nome de uma disciplina: ');
aluno.disciplinas.nome = nome2;
var professor = prompt('Diga o nome do professor de '+nome2+': ');
aluno.disciplinas.professor = professor;
var sala = prompt('Diga a sua sala: ');
aluno.disciplinas.sala = sala;