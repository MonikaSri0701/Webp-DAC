function main() {
    let jsonStr = `{ "empId": 123456, "empName": "Monika","department": "Engineering" }`;
    
    let obj = JSON.parse(jsonStr);
  
    console.log(obj);
  
  }
  
  main();
  