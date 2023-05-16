// Simple loop
for (let i = 0; i < 10; i++) {
    console.log("Hello");
  }
  console.log("#####");
  let list = ["summer", "winter"];
  // Advance loop
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    console.log(item);
  }
  console.log("######");
  for (let item of list) {
    console.log(item);
  }
  list.forEach(console.log);
  console.log("#####");
  //forEach using callback
  list.forEach((item) => console.log(item));
  
