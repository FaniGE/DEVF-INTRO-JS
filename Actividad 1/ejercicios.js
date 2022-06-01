 
 function ejercicio1(){
    var numero= prompt('Ingresa un número');
    var multiplication = numero *2;
    alert('La multiplicación es '+multiplication);
   
 }
 function ejercicio2(){
    var numero= prompt('Ingresa un número');
    var numero2= prompt('Ingresa otro número');
    var resta = numero - numero2;
    alert('La resta es '+resta);
   
 }

 function ejercicio3(){
    const radio= 5.3;
    var area= Math.PI*Math.pow(radio,2);
    alert('El área del circulo es '+area);
   
 }

function ejercicio4(){
   const diagonalMayor =8;
   const diagonalMenor =6;
    var area = diagonalMayor * diagonalMenor/2;
    alert('El area del rombo es '+area+' centimetros cuadrados')
}

 ejercicio1();
 ejercicio2();
 ejercicio3();
 ejercicio4();
