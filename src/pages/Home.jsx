import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEldenRingData from '../hooks/useEldenRingData';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useEldenRingData();
  const [items, setItems] = useState([]);
  const [category] = useState('greatEnemies');

  // Cargar items para seleccionar uno aleatorio
  useEffect(() => {
    if (loading || error) return;
    
    // Combinar todos los datos en un solo array para selección aleatoria
    const allItems = [
      ...data.greatEnemies.map(item => ({ ...item, type: 'greatEnemies' })),
      ...data.weapons.map(item => ({ ...item, type: 'weapons' })),
      ...data.armors.map(item => ({ ...item, type: 'armors' })),
      ...data.creatures.map(item => ({ ...item, type: 'creatures' })),
      ...data.locations.map(item => ({ ...item, type: 'locations' }))
    ];
    
    setItems(allItems);
  }, [data, loading, error]);

  const handleRandom = () => {
    if (!items || items.length === 0) return;

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    const randomCategory = randomItem.type || category;

    navigate(`/items/${randomCategory}/${randomItem.id}`);
  };

  if (loading) {
    return <div className="loading">Cargando datos del juego...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar los datos: {error}</div>;
  }

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
          <div className="nav-link" onClick={() => navigate('/items')}>
            <div className="nav-card">
              <h3>Explorar las Tierras Intermedias</h3>
              <p>Descubre el vasto mundo de posibilidades que ofrece el juego</p>
            </div>
          </div>
          
          <button onClick={handleRandom} className="random-item-button">
            Ver un elemento aleatorio
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;