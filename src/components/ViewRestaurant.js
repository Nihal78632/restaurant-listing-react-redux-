import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Collapse, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import RestOp from './RestOp'
import Restreview from './Restreview'


function ViewRestaurant() {

    const Base_Url='https://restaurant-listing.onrender.com'
    const [restaurant,setrestaurant]=useState({})

    //to get parameter
    const parameter=useParams()
   
    

    const restaurantdetails=async()=>{
        const response =await axios.get(`${Base_Url}/restaurants/${parameter.id}`)
        setrestaurant(response.data)
        

    }
    console.log(restaurant);
    useEffect(()=>{
        restaurantdetails()
    },[])
  return (
 <>
    { restaurant&&
    <Container>
        
           <Row className='p-5'>
            <Col  sm={12} md={3}>
                {/* image */}
                <Image className='img rounded border p-1' src={restaurant?.photograph} alt={"no image"} fluid />
            </Col>
            <Col md={1}></Col>
            <Col md={8}>
                <h2>{restaurant?.name}</h2>
                <h6>{restaurant?.neighborhood}</h6>
                <ListGroup className='mt-5'>
          <ListGroup.Item><h5>Cuisine: {restaurant?.cuisine_type}</h5></ListGroup.Item>
          <ListGroup.Item>
            <RestOp op={restaurant?.operating_hours}></RestOp>
          </ListGroup.Item>
          <ListGroup.Item>
            <Restreview reviews={restaurant?.reviews}></Restreview>
          </ListGroup.Item>
          
        </ListGroup>
            </Col>
           </Row>
     </Container>}
 </>
  )
}

export default ViewRestaurant