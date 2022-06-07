// FUNCIONES

// ejercicio 1
// oracion y buscar
// palabra ibuscada: true/false
// resultado: palabra relacionada
function sentence (word, search) {
    var elemento_buscado = word.indexOf(search);
    if (elemento_buscado !== -1) {
       return true;
    }else{
        return false;
    }
}

var oracion = prompt("Escribe una oración")
var palabra = prompt("Ingrese la palabra a buscar")
console.log(sentence(oracion,palabra));


// ejercio 2
// suma de los elementos
function suma_x (array) {
    var suma = 0;
    for(i of array){
      suma += i;
    }
    return suma;
}
const numbers = [1,2,3,4,10,11];
console.log (suma_x(numbers));

// ejercicio 3
// polimdormos
function verificar(palabra1) {
    if(palabra1.split('').reverse().join('')==palabra1){
        return true;
    }else{
        return false;
    }
}
const word1 = 'madam'
console.log (verificar(word1));

// ejercicio4
// conversion de grados
function convertir (celcius, farenheit) {
    var message = '';
    if(celcius!=''){
        message = "°C a °F = "+((celcius * 9/5) + 32)
    }else if(farenheit!=''){
         message = "°F a °C = "+((farenheit-32)*5/9);
    }
    return message;
}
var cel = prompt("Grados Celcius");
var fat = prompt("Grados Farenheit");
console.log (convertir(cel,''));
console.log (convertir('',fat));

// Nivel Scope
let x = 10;
function getNumber (num) {
    let y =20;
    if(num > 1){
        num += y
        console.log (num)
    }
    var z =30
    console.log (x + y + z)
}
console.log (x + y)
console.log (x + z)

getNumber (20)
