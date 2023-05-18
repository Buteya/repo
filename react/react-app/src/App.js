import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';
import FunctionalCounter from './components/functionalcounter.js';
// import ConditionalRendering from './components/conditionalrendering';

function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve"/>
      <Counter />
      <FunctionalCounter />
      {/* <ConditionalRendering /> */}
    </div>
  );
}

export default App;
