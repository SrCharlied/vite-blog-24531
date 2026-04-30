# Elden Ring Wiki

Un blog interactivo del juego Elden Ring con información detallada sobre jefes, armas, armaduras, criaturas y ubicaciones.

## 🌟 Características Principales

- Exploración de datos del juego Elden Ring a través de la API de fanapis.com
- Navegación por diferentes categorías de contenido: Jefes Principales, Armas, Armaduras, Criaturas y Ubicaciones
- Sistema de filtrado por categorías con pestañas
- Página de detalle para cada elemento con información específica
- Botón de "Elemento Aleatorio" para descubrir contenido de forma sorpresa
- Diseño responsivo con tema oscuro inspirado en Elden Ring

## 📦 Cómo Correr el Proyecto

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd elden-ring-wiki
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita http://localhost:5173

## 🎮 Cómo Usar

1. En la página principal, haz clic en "Explorar las Tierras Intermedias" para ver la lista de elementos
2. Usa las pestañas para filtrar por categorías: Jefes, Armas, Armaduras, etc.
3. Haz clic en cualquier elemento para ver sus detalles
4. Usa el botón "Ver un elemento aleatorio" para descubrir contenido de forma sorpresa

## 🧩 Componentes Reutilizables

### EldenRingCard

Componente para mostrar información de elementos individuales del juego con una tarjeta visualmente atractiva.

**Props:**
- `item` (object): Objeto con la información del elemento a mostrar
- `type` (string): Tipo de elemento (boss, weapon, armor, creature, location)

### ItemDetail

Componente que muestra los detalles de un elemento específico del juego.

**Props:**
- `id` (string): ID del elemento
- `type` (string): Tipo de elemento

### ItemList

Componente que muestra una lista de elementos con pestañas para filtrar por categorías.

**Props:**
- `data` (array): Array de elementos a mostrar
- `loading` (boolean): Estado de carga
- `error` (string): Mensaje de error si existe

### Home

Página principal de la aplicación con acceso a la lista de elementos y botón de elemento aleatorio.

**Props:**
- `navigate` (function): Función de navegación de react-router-dom

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas principales de la aplicación
├── data/               # Datos y configuraciones
├── hooks/              # Hooks personalizados de React
├── services/            # Servicios para obtener datos de la API
└── utils/              # Funciones de utilidad

## 🌐 API

Los datos se obtienen de la [Elden Ring API](https://eldenring.fanapis.com/) a través del servicio `eldenRingAPI.js`.

## 🎨 Tecnologías Utilizadas

- React 18
- Vite
- React Router
- CSS3
- API de Elden Ring (fanapis.com)
- Axios para peticiones HTTP

## 📚 Fuentes y Recursos

- [Elden Ring API Documentation](https://docs.fanapis.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)