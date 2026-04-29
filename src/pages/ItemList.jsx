import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useEldenRingData from '../hooks/useEldenRingData';
import EldenRingCard from '../components/EldenRingCard';
import './ItemList.css';

const ItemList = () => {
  const { data, loading, error } = useEldenRingData();
  const [activeTab, setActiveTab] = useState('greatEnemies');
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  // Cargar items según la categoría seleccionada
  useEffect(() => {
    let filteredData = [];
    
    switch(activeTab) {
      case 'greatEnemies':
        filteredData = data.greatEnemies || [];
        break;
      case 'weapons':
        filteredData = data.weapons || [];
        break;
      case 'armors':
        filteredData = data.armors || [];
        break;
      case 'creatures':
        filteredData = data.creatures || [];
        case 'locations':
        filteredData = data.locations || [];
        break;
      case 'all':
      default:
        // Combinar todos los datos en un solo array
        const allItems = [
          ...data.greatEnemies.map(item => ({ ...item, type: 'greatEnemy' })),
          ...data.weapons.map(item => ({ ...item, type: 'weapon' })),
          ...data.armors.map(item => ({ ...item, type: 'armor' })),
          ...data.creatures.map(item => ({ ...item, type: 'creature' })),
          ...data.locations.map(item => ({ ...item, type: 'location' }))
        ];
        filteredData = allItems;
        break;
    }
    
    setItems(filteredData);
  }, [data, activeTab]);

  if (loading) {
    return <div className="loading">Cargando datos del juego...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar los datos: {error}</div>;
  }

  // Filtrar por término de búsqueda si existe
  const filteredItems = searchTerm 
    ? items.filter(item => 
        item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : items;

  return (
    <div className="item-list-container">
      <header className="item-list-header">
        <h1 className="page-title">Elden Ring Wiki</h1>
        <p className="page-subtitle">Explora el mundo de las Tierras Intermedias</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar jefes, armas, armaduras, criaturas o ubicaciones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'greatEnemies' ? 'active' : ''}`}
          onClick={() => setActiveTab('greatEnemies')}
        >
          Jefes Principales ({data.greatEnemies.length})
        </button>
        <button 
          className={`tab ${activeTab === 'weapons' ? 'active' : ''}`}
          onClick={() => setActiveTab('weapons')}
        >
          Armas ({data.weapons.length})
        </button>
        <button 
          className={`tab ${activeTab === 'armors' ? 'active' : ''}`}
          onClick={() => setActiveTab('armors')}
        >
          Armaduras ({data.armors.length})
        </button>
        <button 
          className={`tab ${activeTab === 'creatures' ? 'active' : ''}`}
          onClick={() => setActiveTab('creatures')}
        >
          Criaturas ({data.creatures.length})
        </button>
        <button 
          className={`tab ${activeTab === 'locations' ? 'active' : ''}`}
          onClick={() => setActiveTab('locations')}
        >
          Ubicaciones ({data.locations.length})
        </button>
        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todos ({items.length})
        </button>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link to={`/items/${item.type || activeTab}/${item.id}`} key={item.id} className="item-link">
              <EldenRingCard item={item} />
            </Link>
          ))
        ) : (
          <div className="no-results">
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;