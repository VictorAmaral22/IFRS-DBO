let estudantes = [
    {
        nome: 'Maria',
        idade: 25
    },
    {
        nome: 'Carlos',
        idade: 30
    },
    {
        nome: 'Jussara',
        idade: 45
    },
    {
        nome: 'Joaquim',
        idade: 20
    },
    {
        nome: 'Marcos',
        idade: 18
    },
    {
        nome: 'Danilo',
        idade: 32
    }
];

estudantes[6] = estudantes[5]; //danilo
estudantes[5] = estudantes[4]; //marcos
estudantes[4] = estudantes[3]; //joaquim
estudantes[3] = estudantes[2]; //jussara

estudantes[2] = {
    nome: 'Júnior',
    idade: 12
};

estudantes[3] = {
    nome: 'Jurema',
    idade: 42
}

let q = 0;
for(let c = 0 ; c<=6 ; c++){
    if( estudantes[c].idade >= 30 ){
        q++;
    }
}
alert('Tem '+q+' alunos com mais de 30 anos.');

function media(){
    let idades = 0;
    for(let c = 0 ; c<=6 ; c++){
        idades += estudantes[c].idade;
    }
    let media = (idades/7).toFixed(2);
    alert('Esta é a média das idades dos estudantes: '+media);   
}

media();
