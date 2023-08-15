import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from '../RestaurantCard';
import { restaurantlistAction } from '../../Actions/homepageAction';
import { useDispatch, useSelector } from 'react-redux';
import { homepageReducer } from '../../Reducers/homepageReducer';








function Homepage() {
   const Base_Url='https://restaurant-listing.onrender.com'


   //to dispatch
   const dispatch=useDispatch()

   //state to hold all restaurant

   const [allitems,setitems]=useState([])
//code for api calling
    const fetchData=async()=>{
      const response=  await axios.get(Base_Url+'/restaurants')
      setitems(response.data)
      

    }

    //selecting updated state from store
    const responseState=useSelector((state)=>state.homepageReducer)
    const {allrestaurant} = responseState
    
    

    useEffect(()=>{
        // fetchData()
        dispatch(restaurantlistAction())
        

    },[])




  return (
    <div>
      <Row>
        {
          allrestaurant.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestaurantCard restaurant={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Homepage