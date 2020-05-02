import React from 'react'
import  styled  from '@emotion/styled'



const Condition = ({condition , temp}) => {
  
const Temp = styled.h1`
font-size:2rem;`;


const State =styled.h3`
font-size:1.2rem;`;

    return ( 
        <>
        <Temp>{temp}°C</Temp>
        <State>{condition}</State>
        </>

     );
}
 
export default Condition ;