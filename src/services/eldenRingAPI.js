import axios from 'axios';

const API_BASE_URL = 'https://eldenring.fanapis.com/api';

// Función para obtener datos de jefes principales (Great Enemies)
export const fetchGreatEnemies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bosses?limit=100`);

    const keywords = [
      'malenia',
      'radagon',
      'rykard',
      'mohg',
      'maliketh',
      'placidusax',
      'grafted',
      'elden beast',
      'fire giant',
      'dragon',
      'godrick',
      'morgott',
      'rennala',
      'lichdragon',
      'godfrey',
      'hoarah loux',
      'miquella'
    ];

    const greatEnemies = response.data.data.filter(boss => {
      if (!boss.name) return false;

      const name = boss.name.toLowerCase();

      return keywords.some(keyword => name.includes(keyword));
    });

    return { data: greatEnemies };

  } catch (error) {
    console.error('Error fetching great enemies:', error);
    return { data: [] };
  }
};

// Función para obtener datos de armas
export const fetchWeapons = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weapons`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weapons:', error);
    return { data: [] };
  }
};

// Función para obtener datos de armaduras
export const fetchArmors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/armors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching armors:', error);
    return { data: [] };
  }
};

// Función para obtener datos de criaturas
export const fetchCreatures = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/creatures`);
    return response.data;
  } catch (error) {
    console.error('Error fetching creatures:', error);
    return { data: [] };
  }
};

// Función para obtener datos de ubicaciones
export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return { data: [] };
  }
};

export default {
  fetchGreatEnemies,
  fetchWeapons,
  fetchArmors,
  fetchCreatures,
  fetchLocations
};