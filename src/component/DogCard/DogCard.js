import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './DogCard.css';

function DogCard({dog}) {
    
    const [img, setImg] = useState("https://www.bil-jac.com/Images/DogPlaceholder.svg");

        useEffect( () => {
            const dogPhotoUrl= "https://dog.ceo/api/breed/" + dog.dogName + "/images/random";
            axios.get(dogPhotoUrl).then( response => {                               
                setImg(response.data.message);
            });
           } , [] );

    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-card">
                    <Card.Img variant="top" src={img} />
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