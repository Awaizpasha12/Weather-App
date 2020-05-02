import React from 'react'
import  styled  from '@emotion/styled'


const Location  = ({city,country}) => {



    const Container = styled.div`text-align:center`


    const City=styled.h1`
        text-size:1.6rem;
        `
    const Country = styled.h3`
        text-size:1.4rem;
        `
    return ( 
        
       <Container>
           <City>{city}</City>
            <Country>{country}</Country>
        </Container>
     );
}
 
export default Location;