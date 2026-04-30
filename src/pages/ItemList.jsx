import React, { useState, useMemo } from 'react';
import useEldenRingData from '../hooks/useEldenRingData';
import EldenRingCard from '../components/EldenRingCard';
import { useFavorites } from "../context/FavoritesContext";
import './ItemList.css';

const ItemList = () => {
  const { data, loading, error } = useEldenRingData();
  const [activeTab, setActiveTab] = useState('greatEnemies');
  const [searchTerm, setSearchTerm] = useState('');
  const { favorites } = useFavorites();

  const allItems = useMemo(() => [
    ...(data.greatEnemies || []).map(i => ({ ...i, type: 'greatEnemies' })),
    ...(data.weapons || []).map(i => ({ ...i, type: 'weapons' })),
    ...(data.armors || []).map(i => ({ ...i, type: 'armors' })),
    ...(data.creatures || []).map(i => ({ ...i, type: 'creatures' })),
    ...(data.locations || []).map(i => ({ ...i, type: 'locations' }))
  ], [data]);

  const items = useMemo(() => {
    switch (activeTab) {
      case 'greatEnemies':
      case 'weapons':
      case 'armors':
      case 'creatures':
      case 'locations':
        return allItems.filter(item => item.type === activeTab);

      case 'favorites':
        return allItems.filter(item => favorites.includes(item.id));

      case 'all':
      default:
        return allItems;
    }
  }, [activeTab, allItems, favorites]);

  const filteredItems = searchTerm
    ? items.filter(item =>
        (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : items;

  if (loading) {
    return <div className="loading">Cargando datos del juego...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar los datos: {error}</div>;
  }

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
          Jefes Principales ({data.greatEnemies?.length || 0})
        </button>

        <button 
          className={`tab ${activeTab === 'weapons' ? 'active' : ''}`}
          onClick={() => setActiveTab('weapons')}
        >
          Armas ({data.weapons?.length || 0})
        </button>

        <button 
          className={`tab ${activeTab === 'armors' ? 'active' : ''}`}
          onClick={() => setActiveTab('armors')}
        >
          Armaduras ({data.armors?.length || 0})
        </button>

        <button 
          className={`tab ${activeTab === 'creatures' ? 'active' : ''}`}
          onClick={() => setActiveTab('creatures')}
        >
          Criaturas ({data.creatures?.length || 0})
        </button>

        <button 
          className={`tab ${activeTab === 'locations' ? 'active' : ''}`}
          onClick={() => setActiveTab('locations')}
        >
          Ubicaciones ({data.locations?.length || 0})
        </button>

        <button 
          className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favoritos ({favorites.length})
        </button>

        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todos ({allItems.length})
        </button>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <EldenRingCard
              key={`${item.type}-${item.id}`} 
              item={item}
            />
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