import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <span className="text-primary">Academia</span> de Baile
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link 
                className={`nav-link fw-medium ${location.pathname === '/' ? 'active text-warning' : 'text-white'}`} 
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                className={`nav-link fw-medium ${location.pathname === '/cursos' ? 'active text-warning' : 'text-white'}`} 
                to="/cursos"
              >
                Cursos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-primary text-white text-center py-5">
          <div className="container">
            <h1 className="fw-bold display-4 mb-3">Academia de Baile Folklórico</h1>
            <p className="lead mb-0">Jhesica Laura Colque Huchani</p>
          </div>
        </header>

        <Navbar />

        <main className="flex-grow-1 py-4 bg-light">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<Cursos />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Jhesica Laura Colque Huchani - Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;