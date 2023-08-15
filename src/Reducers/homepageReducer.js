export const homepageReducer=(state={allrestaurant:[]},action)=>{
    switch(action.type){
        case "SUCCESS":
            return {allrestaurant:action.payload}
            break;

        case "Fail":
            return {allrestaurant:[]} 
            break; 
            
        default:
            return state
            break;    
    }

}