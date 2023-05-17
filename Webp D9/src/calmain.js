import { addition } from "./cal.js";
import { multiplication } from "./cal.js";

function main() {
  // calling calc add module
  let sum = addition(10, 20);
  console.log("SUM=", sum);

  //calling  cal mul module
  let multiply = multiplication (2, 3);
  console.log("MULTIPLY=" ,multiply); 
}

main();