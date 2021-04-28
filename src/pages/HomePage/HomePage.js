import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="p-home">
                 <Container>
                    <h1 className="display-4">Dog Book</h1>
                    <p className="lead">Man`s Best Friend</p> 
                    <Link className="btn btn-light" to="/breeds">Woof!</Link>                     
                </Container>
            </div>
        );
    }
}

export default HomePage;