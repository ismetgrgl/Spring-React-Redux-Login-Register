import React from 'react'
import {  BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';



function RouterPage() {
   

        return(<BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/home' element={<Home/>}/>
           
          </Routes>
      </BrowserRouter>);
      
      
}

export default RouterPage