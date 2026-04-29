import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Elden Ring Wiki</h1>
        <p className="hero-subtitle">Explora el mundo de las Tierras Intermedias</p>
      </header>
      
      <section className="content-section">
        <div className="intro-text">
          <h2>Bienvenido al Blog de Elden Ring</h2>
          <p>Descubre jefes legendarios, armas poderosas, armaduras únicas y criaturas misteriosas en este completo recurso para aventureros de Elden Ring.</p>
        </div>
        
        <div className="navigation-links">
          <Link to="/items" className="nav-link">
            <div className="nav-card">
              <h3>Explorar Jefes</h3>
              <p>Conoce a los temibles gobernantes de las Tierras Intermedias</p>
            </div>
          </Link>
          
          <Link to="/items" className="nav-link">
            <div className="nav-card">
              <h3>Armas y Armaduras</h3>
              <p>Descubre el arsenal de armas y armaduras del juego</p>
            </div>
          </Link>
          
         <Link to="/items" className="nav-link">
        <div className="nav-card">
          <h3>Ubicaciones</h3>
          <p>Explora los reinos y regiones de Elden Ring</p>
        </div>
      </Link>

        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Elden Ring Wiki. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;