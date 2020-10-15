// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Nicolas';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 23;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// function devolverString(str) {
//   // "Return" la string provista: str
//   // Tu código:
// }

devolverString = str => str;

// function suma(x, y) {
//   // "x" e "y" son números
//   // Suma "x" e "y" juntos y devuelve el valor
//   // Tu código:
// }

suma = (x,y) => x + y;

// function resta(x, y) {
//   // Resta "x" de "y" y devuelve el valor
//   // Tu código:
// }

resta = (x,y) => x - y;

// function multiplica(x, y) {
//   // Multiplica "x" por "y" y devuelve el valor
//   // Tu código:
// }

multiplica = (x,y) => x * y;

// function divide(x, y) {
//   // Divide "x" entre "y" y devuelve el valor
//   // Tu código:
// }

divide = (x,y) => x / y;

// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

sonIguales = (x,y) => x === y;

// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

tienenMismaLongitud = (x,y) => x.length === y.length;

// function menosQueNoventa(num) {
//   // Devuelve "true" si el argumento de la función "num" es menor que noventa
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

menosQueNoventa = x => x < 90;

// function mayorQueCincuenta(num) {
//   // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

mayorQueCincuenta = x => x > 50;

// function obtenerResto(x, y) {
//   // Obten el resto de la división de "x" entre "y"
//   // Tu código:
// }

obtenerResto = (x,y) => x % y;

// function esPar(num) {
//   // Devuelve "true" si "num" es par
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

esPar = x => x % 2 === 0;

// function esImpar(num) {
//   // Devuelve "true" si "num" es impar
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

esImpar = x => x % 2 !== 0;

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu código:
// }

elevarAlCuadrado = x => x * x;

// function elevarAlCubo(num) {
//   // Devuelve el valor de "num" elevado al cubo
//   // Tu código:
// }

elevarAlCubo = x => x * x * x;

// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//}

elevar = (x,y) => Math.pow(x,y);

//function redondearNumero(num) {
//   // Redondea "num" y devuélvelo
//   // Tu código:
// }

redondearNumero = x => Math.round(x); 

// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba y devuélvelo
//   // Tu código:
// }

redondearHaciaArriba = x => Math.ceil(x);

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
// }

agregarSimboloExclamacion = x => x + '!';

// function combinarNombres(nombre, apellido) {
//   // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//   // Ejemplo: "Soy", "Henry" -> "Soy Henry"
//   // Tu código:
// }

combinarNombres = (x,y) => x + ' ' + y;

// function obtenerSaludo(nombre) {
//   // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
//   // "Martin" -> "Hola Martin!"
//   // Tu código:
// }

obtenerSaludo = x => 'Hola ' + x + '!';

// function obtenerAreaRectangulo(alto, ancho) {
//   // Retornar el area de un cuadrado teniendo su altura y ancho
//   // Tu código:
// }

obtenerAreaRectangulo = (x,y) => x * y;


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
