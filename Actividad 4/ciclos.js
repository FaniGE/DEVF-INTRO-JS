// 1. Leer el cap 2 del libro Eloquent JavaScript: Estructura del programa.

// Ejercicio 2 -> multiplos de 5
var numero = Number(prompt('Ingresa un número'));
let num = 1;
while(num <= numero) {
    if (num%5==0) {
        console.log(num+' es multiplo de 5'); 
    }
    num++;
}

// Ejercicio 3 -> multiplos de 5
var numero = Number(prompt('Ingresa un número'));
let i = 1;
do {
    if (i%5==0) {
        console.log(i+' es multiplo de 5');
    }
  i++;
} while (i <= numero);
    
// Ejercicio 4 -> numeros impares del 1 al 50
for (let num = 1; num<= 50; num++) {
    if (num%2 != 0) {
        console.log(num+' estos son los umeros impares del 1 al 50'); 
    }
}


