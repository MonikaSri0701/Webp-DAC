// Ascending
let pattern = "";
for (let i = 0; i < 5; i++) {
  pattern = pattern + "*";
  console.log(pattern);
}


// Descending
for (let i = 5; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
