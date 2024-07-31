import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {  BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Register from './pages/Register';
import store from './features';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = 
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
  </Provider>



root.render(router);
