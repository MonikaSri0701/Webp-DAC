import React, { useState } from 'react';
import './App.css';

function App() {
  let [selectedImage] = useState(null);
  let [activeView, setActiveView] = useState(null);

  let handleButtonClick = (view) => {
    setActiveView(view);
  };

  let getViewImage = () => {
    if (activeView === 'Front View') {
      return 'https://picsum.photos/id/0/300/300';
    } else if (activeView === 'Back View') {
      return 'https://picsum.photos/id/2/300/300';
    } else if (activeView === 'Side View') {
      return 'https://picsum.photos/id/6/300/300';
    } else if (activeView === 'Full View') {
      return 'https://picsum.photos/id/9/300/300';
    } else {
      return selectedImage;
    }
  };

  return (
    <div className="App">
      <img src={getViewImage()} alt="Selected" />
      <div>
        <button onClick={() => handleButtonClick('Front View')}>Front View</button>
        <button onClick={() => handleButtonClick('Back View')}>Back View</button>
        <button onClick={() => handleButtonClick('Side View')}>Side View</button>
        <button onClick={() => handleButtonClick('Full View')}>Full View</button>
      </div>
    </div>
  );
}

export default App;