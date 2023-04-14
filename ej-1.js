// Dada la siguiente colección elementos [1, 10, 6, 8, 15, 2]
// 1) Determinar cuál es el número mayor y en qué posición de la colección se encuentra.
//   a) Sin utilizar ninguna función.
//   b) Utilizando al menos una función / método.
// 2) Ordenar la lista.
//   a) Determinar cuales son pares y en qué posición se encuentran
//   b) Crear un nuevo arreglo con los números pares únicamente.

// EJERCICIO 1
console.error('EJERCICIO 1');
const arregloInicial1 = [1, 10, 6, 8, 15, 2];
console.log(`Arreglo inicial: ${arregloInicial1}`);

// a)
let numeroMayor1A = 0;
let indexNumeroMayor1A;
const longitudArreglo = arregloInicial1.length;

for (let index = 0; index < longitudArreglo; index++) {
  if (numeroMayor1A < arregloInicial1[index]) {
    numeroMayor1A = arregloInicial1[index];
    indexNumeroMayor1A = index;
  }
};
console.warn('EJ 1-A');
console.log(`El numero mayor es: ${numeroMayor1A} y esta en la posicion: ${indexNumeroMayor1A} del arreglo`);

// b)
let numeroMayor1B = 0;
let indexNumeroMayor1B;

arregloInicial1.forEach(numero => {
  if (numeroMayor1B < numero) {
    numeroMayor1B = numero;
  };
});

indexNumeroMayor1B = buscarIndiceNumeroMayor(numeroMayor1B);

console.warn('EJ 1-B');
console.log(`El numero mayor es: ${numeroMayor1B} y esta en la posicion: ${indexNumeroMayor1B} del arreglo`);

function buscarIndiceNumeroMayor(numero) {
  return arregloInicial1.indexOf(numero);
};


// EJERCICIO 2
// Ordenamiento de lista
console.error('EJ 2');
const arregloInicial2 = [1, 10, 6, 8, 15, 2];
let arregloOrdenado = [...arregloInicial2];
let indiceMenor;
let variableTemporal;

for (let i = 0; i < arregloOrdenado.length; i++) {
  indiceMenor = i;

  for(let j = i + 1; j < arregloOrdenado.length; j++) {
    if(arregloOrdenado[j] < arregloOrdenado[indiceMenor]) {
      indiceMenor = j;
    }
  }

  variableTemporal = arregloOrdenado[i];
  arregloOrdenado[i] = arregloOrdenado[indiceMenor];
  arregloOrdenado[indiceMenor] = variableTemporal;
}
console.log(`Arreglo inicial: ${arregloInicial2}`);
console.log(`Arreglo ordenado: ${arregloOrdenado}`);

// a)
console.warn('EJ 2-A');
arregloOrdenado.forEach((numero, index) => {
  if(numero % 2 == 0) {
    console.log(`El numero: ${numero} es PAR y se encuentra en la posicion: ${index}`);
  } else {
    console.log(`El numero: ${numero} es IMPAR`);
  }
})

// b)
console.warn('EJ 2-B');
let numerosPares = [];

arregloOrdenado.forEach(numero => {
  if(numero % 2 == 0) {
    numerosPares.push(numero);
  }
})

console.log(`Arreglo de numeros pares: ${numerosPares}`);