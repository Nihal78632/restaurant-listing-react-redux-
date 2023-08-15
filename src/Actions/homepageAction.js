import axios from "axios";
import { FAIL, SUCCESS } from "../constants/homepageconstants";





const Base_Url='https://restaurant-listing.onrender.com'

//logic for updating state

export const restaurantlistAction=()=>async(dispatch)=>{
try{
    //api calling
    const {data}=  await axios.get(Base_Url+'/restaurants')
      console.log(data);
      dispatch({
        payload:data,
        type:SUCCESS
      })

}catch(error){
    dispatch({
        payload:error,
        type:FAIL
      })

}
}

