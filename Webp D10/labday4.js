function main() {
    let string = ["Delhi", "Mumbai"];
  
    // Add 2 elements to the end of the array 
    string.push("Pune");
    string.push("Nagpur");
  
    console.log("Array with 2 elements added to the end:", string);

    string.unshift("Bangalore");
    
    console.log("Array with 1 element added to the beginning:", string);
  }
  
  main();