// Ejercicio 1
let miArray=[1,4,6,10,22,55,46,2,5,0];

for (i of myArray){
    if(i>3){
        console.log(i);
    }
    
}

// Ejercicio 2
let myArray1=[];

x=1;

while(x<=5){
    myArray1.push(x);
    x++;
}

console.log(myArray1);

// Ejercicio 3
let myArray=[1,4,6,10,22,55,46,2,5,0];

myArray=myArray.sort(function(a,b){return a-b;});

for(i of myArray2){
 console.log(i);
}