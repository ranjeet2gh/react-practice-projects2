import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [Weather, setWeather] = useState(null);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  
   
  const fetchdata = async () => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date}?unitGroup=metric&key=REWKCQ4WKCMTKWW8Q4QYNHRFF&contentType=json`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'city') {
      setCity(value);
    } else if (name === 'date') {
      setDate(value);
    }
  }; 
 
   console.log("XXXXXXXXXXX" ,Weather);
  function getdata() {
    fetchdata();
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        name="city"
        placeholder="Enter city Name"
        value={city}
        onChange={handleInputChange}
        required
      />
       <input 
          type="date" 
          name="date"
          value={date} 
          onChange={handleInputChange} 
          required 
        />
      <br></br>
      <button onClick={getdata}>Get Weather Info</button>
      <div>
      {error && <div>Error: {error}</div>}
      {Weather &&   (
        <div>
          <h2>Weather Data for {city} on {date}</h2>
          <p>Latitude: {Weather.latitude}</p>
          <p>Longitude: {Weather.longitude}</p>
          <p>Description: {Weather.description || 'No description available'}</p>
          {/* <p>Temperature: {Weather.currentConditions.temp}°C</p>
          <p>Temp Min: {Weather.currentConditions.tempmin}°C</p>
          <p>Temp Max: {Weather.currentConditions.tempmax}°C</p> */}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
