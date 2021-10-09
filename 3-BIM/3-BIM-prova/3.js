function funcionario() {
    this.name = '';
    this.add = '';
    this.sec = '';
    this.degree = '';

    this.numDepen = [];
    this.criarDepen = function(nome,idade,grau,numero) {
        this.numDepen[numero] = {};
        this.numDepen[numero].name = nome;
        this.numDepen[numero].idade = idade;
        this.numDepen[numero].grau = grau;
    }

    this.alterar = function() {
        //Funcionário
        this.name = prompt('Digite o nome do funcionário: ');
        this.add = prompt('Digite o endereço de '+this.name+': ');
        this.sec = prompt('Digite o setor de '+this.name+': ');
        this.degree = prompt('Digite o grau de escolaridade de '+this.name+': ');
        //Dependentes
        var c = prompt('Digite o número de dependentes de '+this.name+': ');
        for (let index = 0; index < c; index++) {
            nome = prompt('Digite o nome do dependente '+(index+1)+':');
            idade = prompt('Digite a idade de '+nome+':');
            grau = prompt('Digite o grau de dependencia de '+nome+':');
            this.criarDepen(nome,idade,grau,index);
        }
    }

    this.exibir = function(){
        var text;
        if( this.degree == undefined ){
            text = 'Funcionário: \nNOME: '+this.name+'\nENDEREÇO: '+this.add+'\nSETOR: '+this.sec+'\n\nDEPENDENTES: ';
        } else {
            text = 'Funcionário: \nNOME: '+this.name+'\nENDEREÇO: '+this.add+'\nSETOR: '+this.sec+'\nGRAU DE ESCOLARIDADE: '+this.degree+'\n\nDEPENDENTES: ';
        }
        for (let c = 0; c < this.numDepen.length; c++) {
            text += '\n( '+(c+1)+' ) NOME: '+this.numDepen[c].name+'\n IDADE: '+this.numDepen[c].idade+'\n GRAU DE DEPENDÊNCIA: '+this.numDepen[c].grau;   
        }
        alert(text);
    }

    this.DeleteDegree = function () {
        delete this.degree;        
    }

    this.mudar = function(){
        var NomeKey = prompt('Qual o nome da key?');
        var NomeDono = prompt('A quem pertençe ? Se for o funcionário digite "fulano". Caso seja um dos dependentes, digite o numero dele.');
        if(NomeDono == 'fulano'){
            if(NomeKey == 'nome'){
                this.name = prompt('Digite o novo nome para o funcionário: ');
                this.exibir();
            }
            if(NomeKey == 'endereco'){
                this.add = prompt('Digite o novo endereço para o funcionário: ');
                this.exibir();
            
            }
            if(NomeKey == 'setor'){
                this.sec = prompt('Digite o novo setor para o funcionário: ');
                this.exibir();
            }
            if(NomeKey == 'grau'){
                this.degree = prompt('Digite o novo grau para o funcionário: ');
                this.exibir();
            }    
        }

        if(NomeDono != 'fulano'){
            parseInt(NomeDono);
            if(NomeKey == 'nome'){
                this.numDepen[NomeDono].name = prompt('Digite o novo nome para o dependente: ');
                this.exibir();
            }
            if(NomeKey == 'idade'){
                this.numDepen[NomeDono].idade = prompt('Digite a nova idade para o dependente: ');
                this.exibir();
            
            }
            if(NomeKey == 'grau'){
                this.numDepen[NomeDono].grau = prompt('Digite o novo grau para o dependente: ');
                this.exibir();
            }    
        } 
    }
}

var fulano = new funcionario;
fulano.alterar();
fulano.exibir();

//Delete
var pergunta = prompt('Deseja excluir o atributo grau de escolaridade?');
if(pergunta == 's' || pergunta == 'S'){
    fulano.DeleteDegree();
    fulano.exibir();
}

//Alterar
pergunta = prompt('Deseja alterar alguma key?');
if(pergunta == 's' || pergunta == 'S'){
    fulano.mudar();
}