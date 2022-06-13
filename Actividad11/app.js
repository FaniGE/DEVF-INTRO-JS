// Darle funcionalidad a los botones y redlejar el reultado en mi pantalla

// vamos a usar para guardar el valor del contador
let count = 0;

// traer el elemento span para reflejar mi contador
let value = document.getElementById('contador');

// Incrementar o decrementar los botones mediante eventos
/*function incrementar(){
   count++;
 value.textContent=count;
 
}*/

// funcion de decrementar: no puede haber negativos
/*function decrementar(){
   if(count<=0){
     count=1;
   }
   count--;
 value.textContent=count;
}*/

// event listener:
const button = document.getElementById('incrementar')
button.addEventListener('click', function(){
  count++;
  value.textContent = count;
})
