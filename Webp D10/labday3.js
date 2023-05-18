function main() {
    let num = [1, 2, 3, 4, 5];
    console.log("Original array:", num);
  
    num[0]++;
    console.log("Increment first elem:", num);
    num[num.length - 1]++;
    console.log("Increment last elem:", num);
  }
  
  main();