
import React, { useEffect, useState } from "react";
import { Row,Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";





export default function SelectSeat(){
 
     const location = useLocation()
     const navigate = useNavigate()
      const {title} = location.state;
      const [ seatsMatrix, setSeatsMatrix] = useState([])
      const[selecteSeats,setSelectsSeats] = useState([])


 const CreateSeats = () => {
    let totalRows = 5;
    let numberOfSeatsInaRow = 9 ;
    let tempSeats = [];
    let row = 0;
    let ch =  'A';
    while(row < totalRows){
        let col = 1;
        let rowArr = [];
        while(col <= numberOfSeatsInaRow){
            rowArr.push(ch+col);
            col++;
        }
        tempSeats.push(rowArr);
        row++;
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);   

    }
   setSeatsMatrix(tempSeats);
 }




  useEffect(() =>{
    CreateSeats();
  }, [])


// here ate we adding the use stare hook to maintail the selected seats
  const handleSelect = (newSeat) =>{
   setSelectsSeats([...selecteSeats, newSeat])
  }
    return(
        <div style={{padding: 50}}>
            <div>
                <h3 className="d-inline-block">{title}</h3>
                <div  style={{marginLeft: 300}} className="d-inline-block"> screen the side</div>
            </div>
          


          <div style={{marginTop:"2rem"}}>
            

        {
            seatsMatrix.map((seatsArr) =>{
                return(
                    <Row  style={{margin:"10PX"}}>
                       {seatsArr.map((seat) => {
                        let isSelected = selecteSeats.indexOf(seat) > -1;
                            return <Col>
                           <Button    style={{backgroundColor: isSelected ? '#4DB6AC' : '#FFEB3B'}}        onClick={() => handleSelect(seat)}   > {seat}</Button>
                            </Col>
                        })}
                    </Row>
                )
            })
        }
</div>
{/* here i an selecting the seats */}


     <div>
        {
            selecteSeats.length > 0 ? <div>
                 { selecteSeats.map((seat) =>{
                    return(
                        <span   style={{marginBottom:"2rem" ,justifyContent:"space-between"}}>{seat}</span>
                        
                    )
                 })}
seats selected
   <div>
     <h3>Total : rs.{selecteSeats.length * 200}</h3>

</div>  

<Button     onClick={ () => navigate('/success')} >check out</Button>
 </div> :
              
              <div> no seats selected</div>
        }
     </div>

                  </div>
    
    )
}




// IN LINE 29 === ITS INCREMENT THE VALUES