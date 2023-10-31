import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';


function App () {
    return(
        <BrowserRouter>
        <Navbar>
            <Routes>
                <Route path='/' exact element={<Home></Home>}/>  
                <Route path='/about' element={<About></About>}/>
                <Route path="services" element={<Services></Services>}/>
            </Routes>
        </Navbar>
        </BrowserRouter>
    );
}
 export default App;