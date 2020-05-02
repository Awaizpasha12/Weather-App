import React , { useState, useEffect } from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

const App = () => {

  const[query,setQuery] = useState("Sydney");

  const [weatherInfo, setWeatherInfo] = useState({
    temp : "",
    condition : "",
    country : "",
    city : ""
  });

  useEffect(() => {
    setData();
  },[]);

  const data = async ( q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=64f21afbae5ca7238ea1e965a8ae332f`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  }
  
  const handleSearch = async e => {
    e.preventDefault();
    setData();
  }

  const setData = async () => {
    const res = await data(query);
    const info = {
      temp : res.main.temp,
      condition : res.weather[0].main,
      country : res.sys.country,
      city : query
    }

    setWeatherInfo(info);
  }

  const onChange = e => setQuery(e.target.value);

  const { temp, condition, country, city } = weatherInfo;

  return (
    <div className="App">
      <WeatherCard temp={temp} condition={condition}city={city} country = {country} /> 
      <br />
      <br />
      <form>
        <input name="" value={query} onChange={onChange} />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default App;
