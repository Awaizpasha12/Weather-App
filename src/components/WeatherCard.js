import React from 'react';
import Location from './Location'
import Icon from './Icon'
import Condition from './Condition'

const WeatherCard = ({weatherInfo: {condition , temp , city , country}}) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if( temp > 12 ) {
    highColor = ( 1- ((temp-12) / 28)) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,rgba(255,${highColor},0),rgba(255,${lowColor},0))`
  }
  else if(temp<=12) {
    highColor = (1-(temp +20)/32)*255;
    lowColor  = highColor-150;
    bg = `linear-gradient(to top,rgba(0,${highColor},255),rgba(0,${lowColor},255))`
  }

  const styles = {
    card : {
      margin : 0,
      background : bg,
      width :"200px",
      height : "300px",
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-around",
      alignItems : "center",
      borderRadius : "15px",
    }
  }
    
  return ( 
    <div style={styles.card} >
      <Location city = {city} country={country} />
      <Icon condition={condition} />      
      <Condition temp={temp} condition={condition} />
    </div>
  );
}
 
export default WeatherCard;