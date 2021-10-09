let rotate = function(txt,horario) {
    debugger; //pausar a execução aqui
    const len = txt.length;
    if(horario === true ){
        return txt[len - 1] + txt.substr(0, len -1 );
    }else {
        return txt.substr(1, len) + txt[0];
    }
}

console.log(rotate('ifrs',false));
//true - sifr
//|| horario === '' não é necessário, ele atuomaticamente aceita.
//false - frsi

//O que é falsy(falso)
//false, 0 ,undefined, null, '', NaN

const v = [];

if(v === '') {
    console.log('v é TRUTA'); 
}