import { Link, Route, Routes } from 'react-router-dom';
import './app.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App-container">
      <nav className="App-navbar">
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>
        <ul className="App-nav">
          <li className="App-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
