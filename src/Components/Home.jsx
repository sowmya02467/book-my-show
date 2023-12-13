import React, { useEffect, useState } from "react";
import axios from "axios";
import card from "react-bootstrap/Card"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";









const MOVIE_API='https://api.themoviedb.org/3/movie/now_playing?api_key=23d349ce8dc584da3f1863464d8d5c91&language=en-US&page=1'
const IMAGE_API='https://image.tmdb.org/t/p/w500'

export default function Home(){
 const[movies, setMovies]= useState([])
  const navigate = useNavigate()

// herei am using the useEffect for to call the api calls, this is only one methos is there for to generate the api calls
// the axios are to call the apis
// in 14 line the passing of data present in the resp->data->results(in this list of array we thave the single movie details lie id,poster-path,title of movie and so on throw out of this we can call bask the individual movies by using the call back function)


//    useEffect(() =>{
//     const  user = localStorage.getItem('userEmail')
//     if(!user){
//       navigate('./login')
//     }
//    },[])

  
    



    useEffect(()=>{
     axios.get(MOVIE_API).then((resp)=>{
       
        setMovies(resp.data.results)
     })

    }, []);


    // useEffect(()=>{

    //     const user=localStorage.getItem('userEmail');
    //     if(!user){
    //       navigate('/login')
    //     }

    //   })

//    const handleClick = (movieId) => {

//  navigate('/movie/'+ movieId)
//    }



    return(
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}} >
           
           {movies.map(movie => {
            return(
                <div key={movie.id} >
                <Card      onClick={() => navigate(`/movie/${movie.id}`, {state:movie})} style={{width:"15rem", padding: 25, height: "auto", overflow: "hidden" ,margin: 5}}>
                <Card.Img src={IMAGE_API + movie.poster_path}  width={80}></Card.Img>
                 <card.Title>{movie.title}</card.Title>
             

                </Card>
                </div>
            )
           
           })}



        </div>
    )
}
