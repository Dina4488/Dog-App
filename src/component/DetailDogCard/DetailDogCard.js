
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DetailDogCard.css'

function DetailDogCard({dog}) {
    console.log(dog);

    return (       
        <Col xs={12} md={6} lg={3}>              
            <Card className="class-card-detail">
                <a href={dog} target="_blank">
                    <Card.Img variant="top" src={dog} />            
                </a>                                  
            </Card>
        </Col>
    );
}

export default DetailDogCard;