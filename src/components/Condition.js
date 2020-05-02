import React from 'react';

const Condition = ({ condition , temp} ) => {

    const styles = {
        temp : {
            fontSize : "2rem",
        },
        condition : {
            fontSize : "1.2rem"
        }
    }

    return (
        <div>
            <div style={styles.temp}>{temp}°C</div>
            <div style={styles.condition}>{condition}</div>
        </div>
     );
}
 
export default Condition;