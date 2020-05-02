import React from 'react';

const Location  = ( { city, country } ) => {
    const styles = {
        container : {
            textAlign : "center"
        },
        city : {
            textSize : "1.6rem",
            textTransform : "capitalize"
        },
        country : {
            textSize : "1.4rem"
        }
    }
    
    return ( 
       <div style={styles.container}>
            <div style={styles.city}>{city}</div>
            <div style={styles.country}>{country}</div>
        </div>
     );
}
 
export default Location;