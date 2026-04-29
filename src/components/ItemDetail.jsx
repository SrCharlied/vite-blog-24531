import React, { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://eldenring.fanapis.com/api';

const ItemDetail = () => {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/${type}/${id}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item:', error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, type]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <div>Item not found</div>
      )}
    </div>
  );
};

export default ItemDetail;