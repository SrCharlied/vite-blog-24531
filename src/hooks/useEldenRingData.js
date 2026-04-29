import { useState, useEffect } from 'react';
import { 
  fetchGreatEnemies, 
  fetchWeapons, 
  fetchArmors, 
  fetchCreatures, 
  fetchLocations 
} from '../services/eldenRingAPI';

const useEldenRingData = () => {
  const [data, setData] = useState({
    greatEnemies: [],
    weapons: [],
    armors: [],
    creatures: [],
    locations: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [greatEnemies, weapons, armors, creatures, locations] = await Promise.all([
          fetchGreatEnemies(),
          fetchWeapons(),
          fetchArmors(),
          fetchCreatures(),
          fetchLocations()
        ]);
        
        setData({
          greatEnemies: greatEnemies.data,
          weapons: weapons.data,
          armors: armors.data,
          creatures: creatures.data,
          locations: locations.data
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useEldenRingData;