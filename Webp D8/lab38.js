//func that accepts unordered param - Pass all the param -Pass less param
function myFunction(a, b, c) {
    console.log(a, b, c);
  }

myFunction(1, 2, 3);
myFunction(2, 3, 1);

myFunction(1, 2);
myFunction(1, 2, 3, 4, 5);

//default value - Accepts less param Pass more param.
function addNumbers(a = 1, b = 1) {
    return a + b;
  }
  
  console.log(addNumbers());       
  console.log(addNumbers(2));      
  console.log(addNumbers(3, 4));  
  