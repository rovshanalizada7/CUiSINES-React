import React, { useContext } from 'react'
import "../Section2/section2.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { globalContext } from '../../../context/GlobalProvider';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const Section2 = () => {

  const {allData,mode,setMode,loading} = useContext(globalContext)

  return (
    <div className={`food-section  ${mode? "dark":null}`}>
      <h1 style={{textAlign:"center",padding:"1.5rem",fontWeight:"bold"}}>The World Cuisines</h1>
      <button className='mode' onClick={() => setMode(!mode)}>{mode?<MdOutlineLightMode style={{fontSize:"20px"}} />:<MdOutlineDarkMode style={{fontSize:"20px"}} />}</button>
    <section className='section2'>
    { loading ? <p>Loading...</p> : 
      allData.map((item,index) => (
        <Card key={index} style={{ width: '20rem',boxShadow:"7px 7px 7px grey" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text style={{height:"105px",width:"100%", overflow:"scroll"}}>
           {item.ingredients}
          </Card.Text>
          <Button style={{padding:"5px 10px",display:"flex",justifyContent:"center",alignItems:"center"}} variant="primary">Order {item.cuisine} Food 😋</Button>
        </Card.Body>
      </Card>
      ))
    }
    </section>
    </div>
  )

}

export default Section2