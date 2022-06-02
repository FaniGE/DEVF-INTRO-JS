function ejercicio1(name,edad){
    var message='';
    if (Number(edad <18)) {
        message=name+" No puedes ingresar a la discoteca";
    }else {
    if (name == 'Carlos' || name == 'Mario') {
        message= name+" Puedes entrar a VIP";
    }else {
        message= name+" Puedes ingresar a la discoteca";
    }
    }
    return message;
    }

function ejercicio2(usuario1, usuario2){
    var resultado='';
    if (
        usuario1 == 'piedra' || 
        usuario1 == 'papel' ||
        usuario1 == 'tijeras' ||
        usuario2 == 'piedra' ||
        usuario2 == 'papel' ||
        usuario2 == 'tijeras'
        ) {
            if(usuario1 == 'piedra'){
                if(usuario2 == 'piedra'){
                    resultado = 'Empate';
                }else if(usuario2=='papel'){
                    resultado='Usuario 2 ganó';
                }else if(usuario2=='tijeras'){
                    resultado='Usuario 1 ganó';
              }
            }else if(usuario1=='papel'){
                if(usuario2 == 'piedra'){
                    resultado = 'Usuario 1 ganó';
                }else if(usuario2=='papel'){
                    resultado='Empate';
                }else if(usuario2=='tijeras'){
                    resultado='Usuario 2 ganó';
                }
            }else if(usuario1=='tijeras'){
                if(usuario2 == 'piedra'){
                    resultado = 'Usuario 2 ganó';
                }else if(usuario2=='papel'){
                    resultado='Usuario 1 ganó';
                }else if(usuario2=='tijeras'){
                    resultado='Empate';
                }
            }
        }else{
          resultado='Incorrecto, ingrese una opción válida';
        }
          return resultado;
      }

function ejercicio3(numero){
    var message='';
    if(numero%2==0){
        message='El número '+numero+' es divisble entre 2';
    }else{
        message='El número '+numero+' no es divisible entre 2';
    }
    return message;
}

function ejercicio4(numero){
    var message='';
    if(numero%2==0){
        message='El número '+numero+' es par';
    }else {
        message='El número '+numero+' es impar';
    }
    return message;
}

function ejercicio5(numero){
    var message='';
    if (numero == 1000){
        message = 'Ganaste un premio';
    }else {
        message = "Lo sentimos, sigue participando";
    }
    return message;
}


function ejercicio6(numero1, numero2){
    var message='';
    if(numero1<numero2){
        message='El número '+numero1+' es menor que el número '+numero2;
    }else  if(numero2<numero1){
        message='El número '+numero2+' es menor que el número '+numero1;
    }else{
        message='Son iguales';
    }
    return message;
}


function ejercicio7(numero1, numero2, numero3){
    var message='';
    if(numero1=numero2=numero3){
        message='Números iguales';
    }else{
        if(numero1>numero2 && numero1>numero3){
            message='El número '+numero1+' es mayor que los números '+numero2+' y '+numero3;
            }else  if(numero2>numero1 && numero2>numero3){
                message='El número '+numero2+' es mayor que los números '+numero1+' y '+numero3;
            }else  if(numero3>numero1 && numero3>numero2){
                message='El número '+numero3+' es mayor que los números '+numero1+' y '+numero2;
            }
    }
    return message;
} 




/*var name = prompt("Escribe tu nombre");
var edad = Number(prompt('Ingresa tu edad'));*/
console.log(ejercicio1(prompt("Escribe tu nombre"),Number(prompt('Ingresa tu edad'))));
console.log(ejercicio1('Jose',40));
// Ejercicio 2
alert(ejercicio2(prompt('Ingresa una opción'),prompt('Ingresa otra opción')));
// Ejercicio 3
alert(ejercicio3(parseInt(prompt('Ingresa un número'))));
// Ejercicio 4
alert(ejercicio4(parseInt(prompt('Ingresa un número'))));
// Ejercicio 5
alert(ejercicio5(parseInt(prompt('Ingresa un número'))));
// Ejercicio 6
alert(ejercicio6(parseInt(prompt('Ingresa un número')),parseInt(prompt('Ingresa otro número'))));
// Ejercio 7
alert(ejercicio7(parseInt(prompt('Ingresa un número')),parseInt(prompt('Ingresa otro número')),parseInt(prompt('Ingresa otro número'))));
