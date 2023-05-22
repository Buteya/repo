import './App.css';
import Message from './components/message';
import Sample from './components/sample';
import Counter from './components/counter';
import FunctionalCounter from './components/functionalcounter.js';
// import ConditionalRendering from './components/conditionalrendering';
import HooksEffect from './components/HooksEffect.js';

function App() {
  return (
    <div className="App">
      <Message />
      <Sample name="Steve"/>
      <Counter />
      <FunctionalCounter />
      {/* <ConditionalRendering /> */}
      <HooksEffect />
    </div>
  );
}

export default App;
