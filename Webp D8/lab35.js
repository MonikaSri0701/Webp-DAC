// Named Function
function named(a1) {
    return a1;
  }
  let result =named("Monika");
  console.log(result);

// Overloaded Named Function 
  function addition(n1, n2) {
    return n1 + n2;
  }
  let output = addition(1, 1);
  console.log(output);

//Named Function with default value
function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(3, 4));
  console.log(multiply(3)); // b is taking the default value of 1
  