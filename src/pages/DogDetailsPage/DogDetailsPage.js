import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Row, Spinner } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import DetailDogCard from '../../component/DetailDogCard/DetailDogCard';

function DogDetailsPage(params) {
    const {index} = useParams();
    const [newDog, setNewDog] = useState([]);

    
    useEffect(() => {        
        axios.get("https://dog.ceo/api/breed/" + index+ "/images").then(res => {
            // console.log(res.data.message);
            setNewDog(res.data.message);
        });
    }, []);
        
   
  
    return (
        <div className="p-dogs">
        <Container className="class-container">
            <h1> {index} Gallery</h1>                      
             <Row>              
                { newDog ? 
                   newDog.map(dog => <DetailDogCard dog={dog}/>) 
                :  
                  <Spinner animation="border"/>  }                             
            </Row>
        </Container>
        </div>
        );         

}    

export default DogDetailsPage;