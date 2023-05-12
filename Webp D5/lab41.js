function changeImageView1(p1) {
    let imgTag = document.querySelector("#imgid1");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "41.jpg");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "42.jpg");
    } else if (p1 == 3) {
      imgTag.setAttribute("src", "43.jpg");
    }else if (p1 == 4) {
        imgTag.setAttribute("src", "44.jpg");
  }else if (p1 == 5) {
    imgTag.setAttribute("src", "45.jpg");
  }
}
function like() {
    let h1CounterTag = document.querySelector("#likecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }
  
  function dislike() {
    let h1CounterTag = document.querySelector("#dislikecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }
