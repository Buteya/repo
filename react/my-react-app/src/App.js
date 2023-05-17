// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <h1>Hello World!</h1>
    </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
