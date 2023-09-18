import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import React from "react";
// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import Navbar from './Navbar';
import Sites from './Sites';
import Circuits from './Circuits';
import AddCircuit from './AddCircuit';
import AddSite from './AddSite';
import ViewSite from './ViewSite';
import ViewCircuit from './ViewCircuit';

import { AuthProvider, RequireAuth } from './Auth';
// import { IP } from './config.js';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='content flex justify-center'>
            <Routes>
              <Route element={<RequireAuth />}>
                <Route path='/sites' element={<Sites />} />
                <Route path='/addsite' element={<AddSite />} />
                <Route path='/viewsite/:site' element={<ViewSite />} />
                <Route path='/circuits' element={<Circuits />} />
                <Route path='/viewcircuit/:id' element={<ViewCircuit />} />
                <Route path='/addcircuit' element={<AddCircuit />} />
              </Route>
              
              <Route path='/' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </div> 
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
