const persona1 = {
  nombre: "Alejandro",
  apellido: "Mingorance",
  edad: 49,
  colorOjos: "marron",
  colorCabello: "castagno",
  fechaNacimiento: "20/06/1976",
};

//el in sirve para saber si existe o no una propiedad, nos devuelve un booleano
console.log('nombre' in persona1)

console.log('tatuaje' in persona1)


//el forin sirve para recorrer un objeto
for(const prop in persona1){
    console.log(persona1[prop])
}