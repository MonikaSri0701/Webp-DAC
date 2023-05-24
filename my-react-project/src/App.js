import {useState} from 'react';
import './App.css';
import BMIForm from './bmicomponents/BMIForm';
import BMIScore from './bmicomponents/BMIScore';

function App() {
 const [bmi, setBmi] = useState(null);
 const [bmiType] = useState("overweight");
  return (
    <div className="App">
      <h2>BMI CALCULATOR</h2>
      <button onClick={() => setBmi(bmi+5)}>Click</button>
      <BMIForm/>
      <BMIScore Mybmi = {bmi} Type = {bmiType}/>

    </div>
  );
}
export default App;
