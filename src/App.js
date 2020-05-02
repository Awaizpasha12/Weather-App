import React ,{useState}from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/components';

function App() {
  const[query,setQuery] = useState("Sydney");

  const[city,setCity] = useState("");
  const[temp,setTemp] = useState("");
  const[condition,setCondition] = useState("");
  const[country,setCountry] = useState("");

  const data = async ( q) => {
    console.log(city)
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=64f21afbae5ca7238ea1e965a8ae332f`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  }
  
  //var data;
  
 // fetch(`http://api.openweathermap.org/data/2.5/weather?q=L&units=metric&APPID=64f21afbae5ca7238ea1e965a8ae332f`).then(response => response.json()).then(data => console.log(data)) 
  
  const handleSearch = e => {
    e.preventDefault();
    
    data(query).then(res =>{
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);



    });
  }
  return (
    <div className="App">
      <WeatherCard  temp={temp} condition={condition}city={city} country = {country}/>  <br></br>
      <form>
        <input value={query} onChange={(e)=> setQuery(e.target.value)}/>
        
        <button onClick = { e=>handleSearch(e)} >Search </button>
      </form>
      </div>
  );
}

export default App;
