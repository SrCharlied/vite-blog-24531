import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:type/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

// Componente para la página 404
const NotFoundPage = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#f0d9b5',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        fontFamily: 'Cinzel, serif',
        fontSize: '3rem',
        color: '#f0d9b5',
        marginBottom: '1rem'
      }}>
        404 - Página no encontrada
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        La página que buscas no existe en las Tierras Intermedias. 
        ¿Quizás deberías explorar otros caminos?
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ 
          color: '#f0d9b5',
          textDecoration: 'none',
          fontSize: '1.1rem',
          padding: '0.5rem 1rem',
          background: 'rgba(138, 109, 59, 0.3)',
          borderRadius: '4px'
        }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default App;