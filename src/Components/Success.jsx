import React from "react";

import {Row, Col} from 'react-bootstrap'
import pop from '../assets/pop122.png'
import success from '../assets/success.png'
export default function Success(){
    return(
        <div>
            <Row>
                <Col>
                   <img src={pop}  height={350}  style={{marginLeft:"2rem"}} alt="" />
                   <div style={{marginLeft:"6rem", marginBottom:"6rem"}}> 
                        <h4 > <span> conform your tickets </span></h4>
                        <h6>Enjoy the movie</h6>
                   </div>
                </Col >
                   
                <Col style={{ marginLeft:"10rem", marginTop:"3rem"}}>
                <img src={success}  style={{height:"20rem", width:"20rem"}}  alt="" />
                </Col>
            </Row>
        </div>
    )
}