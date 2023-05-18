function main() {
    let jsonStr = `{ "id": 1, "name": "Monika", "email": "Monika@gmail.com" }`;
    let obj = JSON.parse(jsonStr);
  
    console.log(typeof jsonStr);
    console.log(typeof obj);
  
    let str1 = JSON.stringify(obj);
    console.log(str1);
  }
  
  main();
  