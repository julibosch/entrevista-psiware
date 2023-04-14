// Dada la siguiente estructura de datos multidimensional:
// [
//   "Key 1" => [1, 4, 5],
//   "Key 2" => [4, 10, 3],
//   "Key 3" => [8, 2, 6]
// ];
//   a) Determinar cual es el número mayor y en que "Key" se encuentra.
//   b) Ordenar los elementos dentro de cada Key.
//   c) Ordenar las keys según el peso de sus elementos internos(por ejemplo para la "Key 1" el peso es
// 10 = 1 + 4 + 5)
//   d) Determinar cuales son pares y crear una nueva "Key" con los valores pares.

// EJERCICIO 2
console.error('EJERCICIO 2');
// a)
const arrayMultidimensional = {
  "Key 1": [1, 4, 5],
  "Key 2": [4, 10, 3],
  "Key 3": [8, 2, 6]
};

let mayor = 0;
let keyMayor;
let i, j, k;

const arrayLen = Object.keys(arrayMultidimensional).length;

for(let i = 1; i <= arrayLen; i++) {
  for(let j = 0; j < arrayLen; j++) {
    if(mayor < arrayMultidimensional[`Key ${i}`][j+1]) {
      mayor = arrayMultidimensional[`Key ${i}`][j+1];
      keyMayor = `Key ${i}`;
    }
  }
};
console.warn('EJ 2-A');
console.log(`El numero mayor es: ${mayor} y se encuentra en la ${keyMayor}`);


// b)
let indiceMin, variableTemp;
// const arregloMultidimensionalOrdenado = Object.assign(arrayMultidimensional);  // Sobreescribe el objeto original
const arregloMultidimensionalOrdenado = JSON.parse(JSON.stringify(arrayMultidimensional)); // Copia profunda
console.warn("EJ 2-B")

for(i = 1; i <= arrayLen; i++) {
  // console.log(arrayMultidimensional[`Key ${i}`]);

  for(j = 0; j < arrayLen; j++) {
    indiceMin = j;
    // console.log(arrayMultidimensional[`Key ${i}`][j]);

    for(k = j + 1; k < arrayLen; k++) {
      // console.log(arrayMultidimensional[`Key ${i}`][k]);
      if(arregloMultidimensionalOrdenado[`Key ${i}`][k] < arregloMultidimensionalOrdenado[`Key ${i}`][indiceMin]) {
        indiceMin = k;
      }
    }

    variableTemp = arregloMultidimensionalOrdenado[`Key ${i}`][j];
    arregloMultidimensionalOrdenado[`Key ${i}`][j] = arregloMultidimensionalOrdenado[`Key ${i}`][indiceMin];
    arregloMultidimensionalOrdenado[`Key ${i}`][indiceMin] = variableTemp;
  }

  // console.log(arregloMultidimensionalOrdenado[`Key ${i}`]);
}

console.log('Arreglo INICIAL');
console.log(arrayMultidimensional); // Arreglo inicial
console.log('Arreglo ORDENADO');
console.log(arregloMultidimensionalOrdenado); // Arreglo ordenado


// c)
console.warn('EJ 2-C');
const arraySumasOrdenado = JSON.parse(JSON.stringify(arrayMultidimensional)); // Copia profunda
let sumaArrayKey, sumaArrayKeySig;
let temporal;

for(i = 1; i < arrayLen; i++) {
  sumaArrayKey = 0;
  sumaArrayKeySig = 0;

  for(j = 0; j < arrayLen; j++) {
    k = i + 1;
    sumaArrayKey += arraySumasOrdenado[`Key ${i}`][j];

    if(k <= 3) {
      sumaArrayKeySig += arraySumasOrdenado[`Key ${k}`][j];
    }
  }

  if(sumaArrayKey > sumaArrayKeySig) {
    temporal = arraySumasOrdenado[`Key ${i}`];
    arraySumasOrdenado[`Key ${i}`] = arraySumasOrdenado[`Key ${k}`];
    arraySumasOrdenado[`Key ${k}`] = temporal;
  }
}
console.log('Arreglo de Keys ordenadas segun el peso');
console.log(arraySumasOrdenado);


// d) 
console.warn('EJ 2-D');
const arrayCompleto = JSON.parse(JSON.stringify(arrayMultidimensional));
let arregloPares = [];

for(i = 1; i <= arrayLen; i++) {
  for(j = 0; j < arrayLen; j++) {
    if(arrayMultidimensional[`Key ${i}`][j] % 2 === 0) {
      if(!arregloPares.includes(arrayMultidimensional[`Key ${i}`][j])) { // Verificar que no haya repetidos
        arregloPares.push(arrayMultidimensional[`Key ${i}`][j])
      }
    }
  }
}
arrayCompleto[`Key 4`] = arregloPares
console.log('Arreglo con la key de numeros PARES');
console.log(arrayCompleto);
