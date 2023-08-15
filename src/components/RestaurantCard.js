import React from 'react'
import { Card } from 'react-bootstrap';
import './Restaurantcard.css'
import { Link } from 'react-router-dom';


function RestaurantCard({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`/view/${restaurant.id}`}>
        <Card className=' m-4' >
        <Card.Img variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title  ><p className='cardd' >{restaurant.name}</p></Card.Title>
          <Card.Text >
           <p>{restaurant.neighborhood}</p>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestaurantCard