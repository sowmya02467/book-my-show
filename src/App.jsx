


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/logo.png";
import { Routes , Route } from 'react-router-dom';
import Login from "./Components/Login";
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Movie from './Components/Movie';
import SelectSeat from './Components/SelectSeat';
import Success from './Components/Success';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';






function App() {

const  [user, setUser] = useState('');


useEffect(()=>{
  const userEmail = localStorage.getItem('userEmail')
  if(userEmail){
    setUser(userEmail)

  }
  
}, [user])


const handlelogout = () =>{
  localStorage.removeItem('userEmail')
  window.location.href= '/login';
}


  return (
    <div className="App">
    
     <Navbar  bg="light"  variant='light'>
     
        <Container>
       
          <Navbar.Brand href="#home">

            <img
              alt=""
              src={logo}
             
              width="40"
              height="40"
              className="d-inline-block align-top"
             
            />{' '}
           TICKET BOX
          </Navbar.Brand>

    {user && <Button className='logout-dtn' onClick={() => handlelogout()}> LOGOUT</Button>}
        
        </Container>
      </Navbar>
     <Routes>
    
        <Route path='/login'  element={< Login/>}/>
         <Route path='/signup' element={< SignUp/>}/>
         <Route path='/Home' element={< Home/>}/>
         <Route path= '/movie/:id'  element={< Movie/>}/>
         <Route  path='/select' element={< SelectSeat/>}/>
         <Route  path='/success' element={< Success/>}/>
     </Routes>
   
    </div>
  )
}

export default App
