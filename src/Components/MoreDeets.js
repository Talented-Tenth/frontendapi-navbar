import React from 'react';
import "./Box.css";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const MoreDeets = () => {
    const cardInfo = [
      { image: "", title: "", text: ""}, 
      { image: "", title: "", text: ""},      
      { image: "", title: "", text: ""},     
      { image: "", title: "", text: ""},

    

    ];
    return(
        <div className="App">
            <h1>MoreDeets HOURS</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
</Card>
        </div>
    )
}

export default MoreDeets;