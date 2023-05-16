// annonymous func
const anonymousFunction = function() {
    console.log("Hello, good morning");
  };
  anonymousFunction(); 
  
// Overloaded Anonymous Function 
const calculate = function(a, b) {
const sum = a + b;
    
console.log(sum);
  };
  
  calculate(2, 3);  
  calculate(2, "3");   

// Anonymous function with default value
const multiply = function(a, b = 2) {
const result = a * b;
console.log(result);
  };
  
  multiply(4);         
  multiply(2, 3);      
  multiply(); 
  