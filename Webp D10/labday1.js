function main() {
    let obj = { id: 1,
        name: "Monika",
        email: "Monika@gmail.com",
        mobile: "2121212",
      };
    console.log(obj);
  
    // Add Course and Batch 
    obj.course = "PG- DAC";
    obj.batch = "March 23";
  
    console.log(obj.course);
    console.log(obj.batch);
  
    // Delete the Phone and Batch 
    delete obj.mobile;
    delete obj.batch;
    console.log(obj);
  }
  
  main();