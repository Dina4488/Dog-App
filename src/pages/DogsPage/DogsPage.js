import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DogModel from '../../model/DogModel';
import DogCard from '../../component/DogCard/DogCard';
import './DogsPage.css';

function DogsPage(props) {
    const [dogs, setDogs] = useState([]);

    useEffect( () => {
        const searhAllDogsURL = "https://dog.ceo/api/breeds/list/all"; 
        axios.get(searhAllDogsURL).then( response => {            
            console.log(response.data.message);
            const dogsList = response.data.message;
            
            const a = [];
            for ( let dog in dogsList) {
                console.log(dog);
                a.push(dog);
            }
            
            setDogs(a);
            // const b = a.data;

            //setDogs(response.data.message);
            // (response.data.message.map( dog => new DogModel(dog) )   );
        });
       } , [] );
     

  
    return (
        <div className="p-actors">
            <Container>            
                   
               
                <Row>
                    {/* {dogs.map(dog => <DogCard dog={dog}/>)} */}
                    {dogs.map(dog => <DogCard dog={dog}/>) }
                    
                </Row>
            </Container>
        </div>
    );

}    

export default DogsPage;