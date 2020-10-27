import {React,useState} from "react"
import {Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import WeeklyExpenses from "./WeeklyExpenses"

export default function PocketCard({inputOne}){
  
  return(
      
    <Card border="dark" style={{ width: '20rem' }}>
  <Card.Header>Updated wallet</Card.Header>
  <Card.Body>
    <Card.Title>

      Now you have: {
        
      }
       
       </Card.Title>
  </Card.Body>
  </Card>
  )
}