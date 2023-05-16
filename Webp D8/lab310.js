//Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));

//Overloaded Arrow Function 
const multiply = (a, b) => {
    if (typeof b === 'undefined') {
      return a * 2; 
    } else {
      return a * b;
    }
  };
  console.log(multiply(3));    
  console.log(multiply(2, 4));

//Arrow function with default value
const Area = (width, height = 1) => {
    return width * height;
  }; 
  console.log(Area(5));       
  console.log(Area(3, 4));  