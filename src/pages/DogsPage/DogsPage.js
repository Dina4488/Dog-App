import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DogModel from '../../model/DogModel';
import DogCard from '../../component/DogCard/DogCard';
import './DogsPage.css';

function DogsPage(props) {
    const [dogs, setDogs] = useState([]);

    
    useEffect(() => {        
        axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
            setDogs(Object.keys(res.data.message).map((name, index) => new DogModel(index,name)));
        });
    }, []);
        
  
    return (
        <div className="p-actors">
            <Container>
                <Row>
                     {dogs.map(dog => <DogCard dog={dog}/>)}                   
                </Row>
            </Container>
        </div>
    );

}    

export default DogsPage;