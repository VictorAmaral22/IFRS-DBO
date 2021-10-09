class Pessoa {
    constructor(nome, idade, sexo) {
        this._nome = nome;
        this._idade = idade;
        this._sexo = sexo;
    }
    setNome() {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }

    setIdade() {
        this._idade = idade;
    }
    getIdade() {
        return this._idade;
    }

    setSexo() {
        this._sexo = sexo;
    }
    getSexo() {
        return this._sexo;
    }
    fazerAniver() {
        this._idade++;
        console.log(this._nome + ' faz aniversário de ' + this._idade + ' anos!');
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, sexo, matricula, curso) {
        super(nome, idade, sexo);
        this._matricula = matricula;
        this._curso = curso;
    }
    setMatricula() {
        this._matricula = matricula;
    }
    getMatricula() {
        return this._matricula;
    }

    setCurso() {
        this._curso = curso;
    }
    getCurso() {
        return this._curso;
    }
    cancelarMatricula() {
        console.log('matricula cancelada');
    }

}

class Professor extends Pessoa {
    constructor(nome, idade, sexo, especialidade, salario) {
        super(nome, idade, sexo);
        this._especialidade = especialidade;
        this._salario = salario;
    }
    setespecialidade() {
        this._especialidade = especialidade;
    }
    getespecialidade() {
        return this._especialidade;
    }

    setsalario() {
        this._salario = salario;
    }
    getsalario() {
        return this._salario;
    }
    receberAumento(aumento) {
        this._salario += aumento;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, sexo, setor, trabalhando) {
        super(nome, idade, sexo);
        this._setor = setor;
        this._trabalhando = trabalhando;
    }
    settrabalhando() {
        this._trabalhando = trabalhando;
    }
    gettrabalhando() {
        return this._trabalhando;
    }

    setsetor() {
        this._setor = setor;
    }
    getsetor() {
        return this._setor;
    }
    mudarTrabalho() {
        console.log('mudou de trabalho');
    }
}

var Pessoa1 = new Pessoa('aaa', 11, 'masc');
Pessoa1.fazerAniver();

var Aluno1 = new Aluno('bbb', 22, 'fem', '1111', 'info');
Aluno1.cancelarMatricula();

var Func1 = new Funcionario('ccc', 33, 'masc', 'caixa', true);
Func1.mudarTrabalho();

var Prof1 = new Professor('ddd', 44, 'fem', 'Matemática', 1500);
Prof1.receberAumento(100);