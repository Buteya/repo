import './App.css';
import MyButton from './components/MyButton.js';
import AboutPage from './components/AboutPage.js';
import Profile from './components/Profile.js';
import Content from './components/Content.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <MyButton />
      <AboutPage/>
      <Profile />
      <Content />
    </div>
  );
}

export default App;
