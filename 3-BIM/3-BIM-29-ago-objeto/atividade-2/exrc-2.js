let fila = [];
fila[0] = 'Carlos';
fila[1] = 'Maria';
fila[2] = 'João';
fila[3] = 'Marcos';
fila[4] = 'Márcia';
fila[5] = 'Beatriz';

function comm(){
    let m = 'Os seguintes clientes tem a primeira letra "M": \n';
    for(let c = 0 ; c <= 4 ; c++){
        if( fila[c].charAt(0) == 'm' || fila[c].charAt(0) == 'M' ){
            m += '-'+fila[c]+'\n';
        }
    }
    alert(m);
}
comm();

function remov(){
    let p = 'EStes são os próximos clientes: \n';
    p += fila.shift()+' e ';
    p += fila.shift()+'.'; 
    alert(p);
}
remov();