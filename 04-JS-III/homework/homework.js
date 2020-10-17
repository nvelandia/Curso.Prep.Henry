// No cambies los nombres de las funciones.

// function devolverPrimerElemento(array) {
//   // Devuelve el primer elemento de un array
//   // Tu código:
// }

devolverPrimerElemento = x => x[0];

// function devolverUltimoElemento(array) {
//   // Devuelve el último elemento de un array
//   // Tu código:
// }

devolverUltimoElemento = x => x[x.length-1];

// function obtenerLargoDelArray(array) {
//   // Devuelve el largo de un array
//   // Tu código:
// }

obtenerLargoDelArray = x => x.length;

// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:
// }

incrementarPorUno = x => x.map(e => e+1)

// function agregarItemAlFinalDelArray(array, elemento) {
//   // Añade el "elemento" al final del array
//   // y devuelve el array
//   // Tu código:
// }

agregarItemAlFinalDelArray = (x,y) =>  {x.push(y); return x}

// function agregarItemAlComienzoDelArray(array, elemento) {
//   // Añade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el método `.unshift`
//   // Tu código:
// }

agregarItemAlComienzoDelArray = (x,y) => {x.unshift(y); return x}

// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:
// }

dePalabrasAFrase = x => x.join(' ');

// function arrayContiene(array, elemento) {
//   // Comprueba si el elemento existe dentro de "array"
//   // Devuelve "true" si está, o "false" si no está
//   // Tu código:
// }

arrayContiene = (x,y) => x.includes(y);

// function agregarNumeros(numeros) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Suma todos los enteros y devuelve el valor
//   // Tu código:
// }

agregarNumeros = x => x.reduce((a,b) => a +b )

// function promedioResultadosTest(resultadosTest) {
//   // "resultadosTest" debe ser una matriz de enteros (int/integers)
//   // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
//   // Tu código:
// }

promedioResultadosTest = x => {
  const suma = x.reduce((a,b) => a + b)
  return suma / x.length}

// function numeroMasGrande(numeros) {
//   // "numeros" debe ser una matriz de enteros (int/integers)
//   // Devuelve el número más grande
//   // Tu código:
// }

numeroMasGrande = x => {
  let mayor = 0;
  x.forEach(e => {
    if(e > mayor){mayor = e}
  });
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
 
    if (arguments.length === 0){
      return 0;
    }
   var mult = 1;
    for (var i = 0; i < arguments.length; i++){
            mult = mult * arguments[i];
          }
   return mult;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
