import './App.css';
import {useState} from 'react';
import BmiLayout from './components/BmiLayout.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [age,setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI,setBMI] = useState(0);

  return (
    <div className="App">
      <BmiLayout 
        age={age}
        setAge={setAge}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        BMI = {BMI}
        setBMI={setBMI}
      />
    </div>
  );
}

export default App;
