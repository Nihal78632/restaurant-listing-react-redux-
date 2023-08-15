import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homepageReducer } from "./Reducers/homepageReducer";


const reducers=combineReducers({
    homepageReducer

})
const middlware =[thunk]


const store=createStore(reducers,applyMiddleware(...middlware))

export default store