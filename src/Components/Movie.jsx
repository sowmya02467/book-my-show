

import { useEffect, useState } from 'react';
import  React from "react";
 import {Row , Col, Button} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const IMAGE_API='https://image.tmdb.org/t/p/w500'

const TIMINGS = ["10:10AM", "12:00PM","02:00PM", "06:00PM"]

//  first check the movie id is getting or not and then pass the movie data in to movie component by check the  17 and 18 lines methods so you can not get any null location in the console
export default function Movie(){

 const location = useLocation()
 const {title, overview, poster_path} = location.state


const[latLng, setLatLng] = useState({});
const [ theatres, setTheatres] = useState([])
const navigate = useNavigate();
 

 useEffect(() =>{
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) =>{
            setLatLng({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
        })
    }
 }, [])
   


 useEffect(() => {

    
   if(Object.keys(latLng).length > 0 ){
    const geoAPI = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=place:513a3602f13a85534059438bc965929d3140f00103f9014c250e220000000092030a53616e67617265646479&limit=20&apiKey=4cce574222734e3f99e800220c8cc665`
    axios.get(geoAPI).then(res => {
        
        const featuresArray = res.data.features;
        const names = [];
        featuresArray.map((feature) => names.push(feature .properties.name))
        setTheatres(names)
    }
      

  )}
   
   


 }, [latLng])




    return(
        <div>

           <Row>
            <Col>
            <div style={{margin:"2rem"}}>
                <img style ={{margin:"2rem"}}     src={IMAGE_API+poster_path} height={400} width={400}></img>
                <h4>{title}</h4>
                <div>
                    {overview}
                </div>
            </div>
            </Col>
            <Col>
         <div style={{marginTop:"4rem", padding:'3rem'}}>
         {theatres.map((theatre, index) => {
            return(
                <div key={index} style={{marginBottom: 20}}>
                    <h4 style={{marginBottom: 10}}>{theatre}</h4>
                    {TIMINGS.map((time)=>{
                        return <Button  onClick={ () => navigate('/select', {state : {title: title}})}   key={time} style={{marginRight:5}}>{time}</Button>
                    })}
                    </div>
            )
         })} 
         </div>
          
            </Col>
           </Row>
        </div>
    )
} 

