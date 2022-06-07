# JS Scoping exercises
1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }

  test();
  ```
> _> undefined 
   > 2_ El resultado sería undefined porque se esta llamando a la variable 'a' antes de estar declarada y luego el resultado es 2 porque se esta llamndo a la funcion foo que retorna 2
> _undefined 2 undefined_
2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _undefined_
> _undefined_
3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;
    function bar() {
      console.log( a );
    }
    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _2_ la variable 'a' que es igual a 2 se encuentra dentro de la funcion foo, es decir, esta declarada
> _2_
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```
> _undefined_ 
> _undefined_