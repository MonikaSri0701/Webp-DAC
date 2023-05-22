import './App.css';

function App() {
  return (
    <div>
      <h1>Interpolation Demo</h1>
      <hr />
      <InterpolationBasics />
    </div>
  );
}
function InterpolationBasics() {
  let title = "INDIA";
  let para = `India, officially the Republic of India (ISO: Bhārat Gaṇarājya), is a country in South Asia. 
  It is the seventh-largest country by area, the most populous country as of 1 May 2023, 
  and the most populous democracy in the world.Bounded by the Indian Ocean on the south, 
  the Arabian Sea on the southwest, and the Bay of Bengal on the southeast`;
  return (
    <div>
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
}
export default App;