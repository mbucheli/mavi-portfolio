import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Projects from './Projects';
import ContactMe from './ContactMe';
import About from './About';
import Home from './Home';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/projects" element={<Projects /> } />
        <Route exact path="/contactme" element={<ContactMe /> } />
        <Route exact path="/about" element={<About /> } />
        <Route exact path="/resume" element={<Resume /> } />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
