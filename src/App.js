import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/projects" element={<Projects /> } />
        <Route exact path="/contactme" element={<ContactMe /> } />
      </Routes>
    </div>
  );
}

export default App;
