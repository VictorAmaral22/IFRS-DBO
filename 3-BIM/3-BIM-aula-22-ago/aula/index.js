let dotNotation = {
    prop1: 'Sou uma propriedade',
    metodo: function() {
        return 'Sou um método'
    }
}

console.log(dotNotation.prop1);
console.log(dotNotation.metodo());

dotNotation.prop2 = 'Sou uma nova propriedade';
dotNotation.metodo2 = () => 'Sou um novo método';

console.log(dotNotation.prop2);
console.log(dotNotation.metodo2());

///////////

let bracketNotation = {
    prop1: 'Propriedade do colchete',
    metodo: function () {
        return 'Método do colchete'
    }
}

console.log( bracketNotation['prop1'] );
console.log( bracketNotation['metodo']() );

///////////

function ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false;
}

const ventilador1 = new ventilador(3);

console.log(ventilador1.velocidadeMaxima);