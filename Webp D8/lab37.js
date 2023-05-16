function addNumbers(a, b) {
    a = a || 0;
    b = b || 0;
    return a + b;
  }
  
  console.log(addNumbers(3, 4));   
  console.log(addNumbers(3));      
  console.log(addNumbers());     
  
  
function myFunction(a, b = 10) {
    console.log(a, b);
  }
  
  myFunction(5); 
  myFunction(5, 20); 