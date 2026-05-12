const listaNombres = [];

let cantidad = 5;

do{
    let entrada = prompt('Ingresar un nombre');
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}while (listaNombres.length != cantidad) {
    const nuevaLista = listaNombres.concat(['ANA', 'EMA']);
    alert(nuevaLista.join ('\n'))
    
}
