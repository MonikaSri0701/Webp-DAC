import Header from "./pages/header.js";

function App() {
  return (
    <div>
      <h1>Interpolation Demo</h1>
      <hr /><InterpolationBasics /></div>
  );
}

function InterpolationBasics() {
  //1.  Data Member
  let text = "INDIA";
  let para = `India, officially the Republic of India (ISO: Bhārat Gaṇarājya), is a country in South Asia. 
  It is the seventh-largest country by area, the most populous country as of 1 May 2023, 
  and the most populous democracy in the world.Bounded by the Indian Ocean on the south, 
  the Arabian Sea on the southwest, and the Bay of Bengal on the southeast.`;

  let mystyle = { color: "black" };

  return (
    <div>
      <h1 style={{ color: "blue" }}>{text}</h1>
      <div><Header text={Header} style={mystyle} /></div>
      <p style={{ background: "green", color: "white", padding: "16px" }}>
        {para}
      </p>
    </div>
  );
}

export default App;