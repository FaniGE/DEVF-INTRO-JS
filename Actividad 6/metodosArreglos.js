//  1
function ejercicio1(arreglo1, arreglo2){
    var array_final= arreglo1.concat(arreglo2);
    return array_final;
  }

  var animals=['eagle','parrot','monkey','boar','lion'];
  var comingSoonAnimals=['panter','dragon','turtle'];

  console.log(ejercicio1(animals, comingSoonAnimals));
//  2
function ejercicio2(array_numerico){
    array_numerico.sort(function(a, b) {
        return a - b;
      });

      return array_numerico;
}

var arr =[4,6,1,0,8,2];

console.log(ejercicio2(arr));

//  3
function ejercicio3(array, elemento){
   array.push(elemento);
   return array;
}

var animals2=['eagle','parrot','monkey','boar','lion'];
console.log(ejercicio3(animals2,'cow'));

//  4
var animals3=['eagle','parrot','monkey','boar','lion'];
function ejercicio4(array, elemento){
    var elemento_buscado = array.indexOf(elemento);
    if (elemento_buscado !== -1) {
       array.splice(elemento_buscado, 1);
    }

    return array;
}

console.log(ejercicio4(animals3,'eagle'));