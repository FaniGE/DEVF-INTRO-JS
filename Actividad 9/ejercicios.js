/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
 const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12];

 function ejercicio1(array) {
   var rand = Math.floor(Math.random() * array.length);
   var rand2 = Math.floor(Math.random() * array.length);
   var arr = [];
   if (rand > rand2) {
     arr.push(rand2);
     arr.push(rand);
   } else {
     arr.push(rand);
     arr.push(rand2);
   }
   return arr;
 }
 console.log(ejercicio1(arr));


// Hacer una función para que reciba ese arreglo de objetos
// y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:

//             ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
            
const coleccion = [
                {a: 11, b:224, name: "M48 Bulldog"},
                {a:23, b:56, name: "Object 140"},
                {a: 32, b:75, name: "T57 Heavy"},
            ];
            const col = [
                {a: 11, b:224, name: "M48 Bulldog"},
                {a:23, b:56, name: "Object 140"},
                {a: 32, b:75, name: "T57 Heavy"},
            ];
            let reduce = coleccion.reduce((acumulador, actual) => acumulador + actual.name +'='+(actual.a+actual.b)+' ', 0);
            console.log(reduce);