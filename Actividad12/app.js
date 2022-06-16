const buttons = document.querySelectorAll('button');
const $result = document.getElementById('result');
const $equal = document.getElementById('equal');
const $reset = document.getElementById('reset');
const $delete_one = document.getElementById('delete_one');

let operator1=0;
let operator2=0;
let result=0;
let operation="";

addEvents();

function addEvents(){
    buttons.forEach(button => {
        button.addEventListener('click',getElementClick);
    });
}

function getElementClick(){
    const value = event.srcElement.innerText;
    
    if(event.srcElement.id == 'reset'){
        resetValues();
        return;
    }
    if(value == "="){
        getValues();
    }else{
        verifyValue(value);
    }
}


function resetValues(){
    result=0;
    operator1=0;
    operator2=0;
    operation="";
    $result.value="";
}


function resetOne(){
    $result.value= $result.value.substring(0,$result.value.length-1);
    return;
}

function verifyValue(value){
    if(!isNaN(value)){
        $result.value += value;
    }else{
        if(operation == "" || operation =='.'){
            operation=value;
            $result.value += value;
        }
    }
}


function getValues(){
    const operators = $result.value.split(operation);
    if(operators.length == 2){
        operator1=Number(operators[0]);
        operator2=Number(operators[1]);
        executeOperation(operation);
        $result.value=result;
        operator1 = result;
        operator2=0;
        operation="";
    }
}

function executeOperation(operator){
    switch (operator) {
        case "+":
                result=operator1+operator2;
                break;
                
        case "-":
                result=operator1-operator2;
                break;
        case "÷":
                result=operator1/operator2;
                break;
        case "x":
                result=operator1*operator2;
                break;

        case "%":
                result=operator1/100;
                break;
    }
}
