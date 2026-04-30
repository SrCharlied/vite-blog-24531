import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemDetail.css';
import ItemImage from "../components/ItemImage";
import ItemDescription from "../components/ItemDescription";

const ItemDetail = () => {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        let url = "";

        switch (type) {
          case "greatEnemies":
            url = "https://eldenring.fanapis.com/api/bosses";
            break;
          case "weapons":
            url = "https://eldenring.fanapis.com/api/weapons";
            break;
          case "armors":
            url = "https://eldenring.fanapis.com/api/armors";
            break;
          case "creatures":
            url = "https://eldenring.fanapis.com/api/creatures";
            break;
          case "locations":
            url = "https://eldenring.fanapis.com/api/locations";
            break;
          default:
            setNotFound(true);
            setLoading(false);
            return;
        }

        const res = await axios.get(url);
        
        // Buscar el item por ID en los resultados
        const found = res.data.data.find(item => item.id == id);
        
        if (found) {
          setItem(found);
        } else {
          setNotFound(true);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item:', error);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchItem();
  }, [type, id]);

  if (loading) {
    return <div className="item-detail-container">
      <div>Cargando...</div>
    </div>;
  }

  if (notFound || !item) {
    return (
      <div className="item-detail-container not-found">
        <h1 className="not-found-title">404 - Página no encontrada</h1>
        <p className="not-found-message">Lo sentimos, el item que buscas no existe o no se pudo encontrar.</p>
        <div className="not-found-content">
          <h2>Posibles causas:</h2>
          <ul>
            <li>El item solicitado no existe en la base de datos</li>
            <li>La URL puede estar mal formateada</li>
            <li>El item ha sido eliminado o movido</li>
            <li>Existe alguna inconsistencia de la API</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-header">
        <h1 className="item-detail-title">{item.name}</h1>
        {item.image && (
          <ItemImage src={item.image} alt={item.name} />
        )}
      </div>
      <div className="item-detail-description">
        <ItemDescription description={item.description} />
      </div>
    </div>
  );
};

export default ItemDetail;