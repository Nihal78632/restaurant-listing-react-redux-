
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import ViewRestaurant from './components/ViewRestaurant';



function App() {
  return (
    <>

      <Header/>
     <section> 


    <Routes> 
      <Route path={'/'} element={<Homepage/>}></Route>
      <Route path={'/view/:id'} element={<ViewRestaurant/>}></Route>
      
      
      </Routes>
      
      
      </section>
      <Footer/>
      
      
    </>
  );
}


export default App;
