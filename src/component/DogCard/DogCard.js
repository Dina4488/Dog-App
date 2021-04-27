import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DogCard.css';

function DogCard({dog}) {
    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-card">
                    <Card.Img variant="top" src={dog.image} />
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