import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve"/>
      <Counter />
    </div>
  );
}

export default App;
