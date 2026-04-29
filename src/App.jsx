import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:type/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App