import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Form, FormControl, Row, Spinner } from 'react-bootstrap';
import DogModel from '../../model/DogModel';
import DogCard from '../../component/DogCard/DogCard';
import './DogsPage.css';

function DogsPage(props) {
    const [dogs, setDogs] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [updateImg, setUpdateImg] = useState(false);
        
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
                    <div className="col-lg-4 col-md-8 col-12 ">                       
                        <div className="btn btn-secondary" onClick={()=> setUpdateImg(!updateImg)}>Update Images</div>
                    </div>                          
                </Form>        
             <Row>
                { dogs ?                 
                       dogsFiltered.map(dog => <DogCard dog={dog} updateImg={updateImg}/>)
                       :
                    <Spinner animation="border"/>   
                }               
            </Row>
        </Container>
        </div>
        );         

}    

export default DogsPage;