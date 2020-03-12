
import React from 'react';
import {useEffect,useState} from 'react';
// import classes from "./recipe.module.css";
import {Button,Modal} from 'react-bootstrap'

function  Recipedetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.values.Re.totalNutrients);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        check Details
      </Button>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
        <Modal.Title>Recipe details</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
       <>
       <h3>Total time:{props.values.Re.totalTime} </h3>
       <h3>Total Weight:<br></br>{props.values.Re.totalWeight}</h3>
      
       
      </>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Recipedetails;
