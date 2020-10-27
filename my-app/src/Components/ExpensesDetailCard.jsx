import React from "react"
import {Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExpenseDetail(){

    return(
        <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Expenses </Card.Header>
    <Card.Body>
      <Card.Title>Expenses: $price </Card.Title>
      
    </Card.Body>
  </Card>
    )
}