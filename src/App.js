import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import UpdateCircuit from './UpdateCircuit';
import Register from './Register';

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
                <Route path='/sites/addsite' element={<AddSite />} />
                <Route path='/sites/viewsite/:site' element={<ViewSite />} />
                <Route path='/circuits' element={<Circuits />} />
                <Route path='/circuits/viewcircuit/:id' element={<ViewCircuit />} />
                <Route path='/circuits/updatecircuit/:id' element={<UpdateCircuit />} />
                <Route path='/circuits/addcircuit' element={<AddCircuit />} />
                <Route path='/register' element={<Register />} />
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
