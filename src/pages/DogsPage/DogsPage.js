import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, FormControl, Row, Spinner } from 'react-bootstrap';
import DogModel from '../../model/DogModel';
import DogCard from '../../component/DogCard/DogCard';
import './DogsPage.css';
import NavBar from '../../component/NavBar/NavBar';

function DogsPage(props) {
    const [dogs, setDogs] = useState([]);
    const [filterText, setFilterText] = useState("");

    
    useEffect(() => {        
        axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
            setDogs(Object.keys(res.data.message).map((name, index) => new DogModel(index,name)));
        });
    }, []);
        
    let dogsFiltered = "";
    if (dogs)  {
        dogsFiltered = dogs.filter( (dog) => dog.dogName.toLowerCase().includes(filterText.toLowerCase()) );
    }    
  
    return (
        <div className="p-dogs">
        <Container className="class-container">
            <h1> Dogs Gallery</h1>        
                <Form className="row filter"> 
                <div className="col-lg-8 col-md-8 col-12 ">                    
                    <FormControl type="text" 
                        value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                        placeholder="Filter by a dogs name"
                        />
                </div>                            
                </Form>           
             <Row>
                { dogs ?
                 
                 dogsFiltered.map(dog => <DogCard dog={dog}/>)
                    :
                    <Spinner animation="border"/>   
                }               
            </Row>
        </Container>
        </div>
        );         

}    

export default DogsPage;