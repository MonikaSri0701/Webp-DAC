import './App.css';
import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}
function EventDemo() {
  let [counter, setCounter] = useState(100);
  let [counter1, setCounter1] = useState(100);
  let [displayImage, setDisplayImage] = useState(
    "https://picsum.photos/id/237/300/300"
  );

  let like = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  let DisLike = () => {
    counter1 = counter1 + 1;
    setCounter1(counter1);
  };

  let changeImage = () => {
    displayImage = "https://picsum.photos/id/238/300/300";
    setDisplayImage(displayImage);
  };

  let resetImage = () => {
    displayImage = "https://picsum.photos/id/237/300/300";
    setDisplayImage(displayImage);
  };

  return (
    <div>
      <img src={displayImage} />
      <h1><span Style="cursor: pointer">&#128077; {counter}</span></h1>
      <h1><span Style="cursor: pointer">&#128078; {counter1}</span></h1>


      <input type="button" value="Like Me" onClick={like} />
      <input type="button" value="DisLike" onClick={DisLike} />
      <br />
      <input type="button" value="Change Image" onClick={changeImage} />
      <input type="button" value="Reset Image" onClick={resetImage} />
      </div>
  );
  }

export default App;