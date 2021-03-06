import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './DogCard.css';

function DogCard({dog ,updateImg}) {
    
    const [img, setImg] = useState("https://www.bil-jac.com/Images/DogPlaceholder.svg");

    const [redirectTo, setRedirectTo] = useState();
    

    useEffect( () => {
        const dogPhotoUrl= "https://dog.ceo/api/breed/" + dog.dogName + "/images/random";
        axios.get(dogPhotoUrl).then( response => {                               
            setImg(response.data.message);
        });
        } , [] );

    useEffect( () => {
        const dogPhotoUrl= "https://dog.ceo/api/breed/" + dog.dogName + "/images/random";
        axios.get(dogPhotoUrl).then( response => {                               
            setImg(response.data.message);
        });
        } , [updateImg] );
    
        if(redirectTo){
            return <Redirect to={'/breeds/'+ redirectTo}/>
        }

    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-card">
                    <Card.Img variant="top" src={img} 
                        onClick={ () => setRedirectTo(dog.dogName)}/>
                    <Card.Body className="body">
                        <Card.Title className="fixName">                          
                        </Card.Title>                            
                        <Card.Text>
                       {dog.dogName}
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default DogCard;