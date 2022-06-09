/**
 * Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 * y regresa como resultado, sus respectivas edades y la diferencia de edad. 
 * 
 */
 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

/**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */
function ejercicio2(numeros){
    let suma = 0;
    for(i of numeros){
       if( i > 0){
        suma += i;
       }
        
    }
    return suma;
}
 const numbers = [ 1, -4, 12, 0, -3, 29, -150];
 console.log(ejercicio2(numbers));
/*
*
* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  Ejemplo

  La matriz es la lista original. Los números que faltan son

  matriz = [7,2,5,3,5,3]

  br = [7,2,5,4,6,3,5,3]

Los números que faltan en arr son [4,6]
*/
const matriz = [7,2,5,3,5,]
var br = [7,2,5,4,6,3,5,3]
function ejercicio3(matriz, br) {
    let elementosFaltantes = [];
   // for(i of matriz){
        for(i of br){
            if(matriz.indexOf(i)===-1){
              elementosFaltantes.push(i);
            }
        }

    //}
    return elementosFaltantes;
}

console.log(ejercicio3(matriz, br));
/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

 const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'].reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(arr);

 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */
  function ejercicio5(a1, a2){
    const l = Math.min(a1.length, a2.length);
    const merged = [].concat(...Array.from({ length: l }, (_, i) => [a2[i], a1[i]]), a2.slice(l), a1.slice(l));
    return merged;
  }
  

  const a = ["a", "b", "c"];
  const b = [1,2,3];

  console.log(ejercicio5(a,b));