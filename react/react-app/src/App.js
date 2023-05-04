import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';
import FunctionalCounter from './components/functionalcounter.js'; 

function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve"/>
      <Counter />
      <FunctionalCounter />
    </div>
  );
}

export default App;
