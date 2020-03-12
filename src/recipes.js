import React from "react";
import classes from "./recipe.module.css";
import Recipedetails from './recipedetails';

import {Container,Row, Col,Card,Button,Badge} from 'react-bootstrap';



const Recipes = (props)=> {
    
 return(

<Container>
       
<Row>
        <Col sm={12} md={8}>
            <Card>
                     <Card.Img className={classes.image} variant="Top" src={props.Re.image} />
                    <Card.Body>
                        <Card.Title> {props.Re.label} {<Recipedetails values={props}/>} </Card.Title>

                        <Button variant="primary">Buy Now </Button><Badge variant="danger">Hot</Badge>
                        <Badge variant="info">4.5$</Badge>
                    </Card.Body>
             </Card>
    </Col>
    
    <Col sm={12} md={4}>
            <Card>
                <Card.Img variant="Top"/>
                <Card.Body>
                    <Button variant="primary">Ingredients</Button>
                     <Card.Text>
                        
                        {props.Re.ingredients.map(ing =>(<li key={ing.toString()} >{ing.text}</li> ))}
                        
                    </Card.Text>  
                </Card.Body>
            </Card>
    </Col>


</Row>
</Container>

 );
};
export default Recipes;  