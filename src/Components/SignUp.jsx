
import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import movie11222 from "../assets/moviesss44.png";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


export default function SignUp(){

    const[email, setEmail] = useState(" ");

    const navigate = useNavigate();

    const handleSubmit  = () =>{
        localStorage.setItem('UserEmail', email);

        navigate('/home');
    }
    return(
        <div className="container-uu">
            <Container>
                <Row>
                    <Col className="image-style">
                <img src={movie11222}  style={{width:"28rem", height:"25rem"}}/>
                 <h1 style={{color:"white",marginLeft:"-4rem"}}><bold>BOOK TICKETS|EARN POINTS</bold></h1>
                  </Col>

                    <Col>
                    <Card style={{ display:"flex", marginTop:"2rem",marginLeft:"3.5rem",width:"25rem",height:"25rem"}}>
                   
                   
     
                         <Card.Body>
     <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}
                      value={email}/>
                  </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>conform password</Form.Label>
                     <Form.Control type="password" placeholder="Conform password " />
                    </Form.Group>
                  
          
                <Button variant="primary" type="submit" style={{width:"20rem"}} className="login-btn" onClick={ handleSubmit} 
 >
                   sign up
                 </Button>
              </Form>
              <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
               already have an account? please <Card.Link href="./login">Login</Card.Link>
                </div>
             </Card.Body>
                  </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}