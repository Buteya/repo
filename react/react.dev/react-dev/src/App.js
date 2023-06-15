import './App.css';
import {useState} from 'react';
import MyButton from './components/MyButton.js';
import AboutPage from './components/AboutPage.js';
import Profile from './components/Profile.js';
import Content from './components/Content.js';
import ShoppingList from './components/ShoppingList.js';


function App() {
  const [count,setCount] = useState(0);;

  function handleClick(){
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <AboutPage/>
      <Profile />
      <Content />
      <ShoppingList />
    </div>
  );
}

export default App;
