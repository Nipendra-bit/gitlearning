import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Skill from './components/Skill';

function App() {
  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <header className="navbar">
        <a href=""></a>
        <h2 className="logo">Nipendra Kumar Raghav</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/contact">Contact</Link><br/>
          <Link to="/skill">Skill</Link>
        </nav>
      </header>

      {/* Content Section */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
