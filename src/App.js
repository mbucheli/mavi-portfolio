import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Projects from './Projects';
import ContactMe from './ContactMe';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/projects" element={<Projects /> } />
        <Route exact path="/contactme" element={<ContactMe /> } />
        <Route exact path="/about" element={<About /> } />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
