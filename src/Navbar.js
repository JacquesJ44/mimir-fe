import { Link } from 'react-router-dom';
import logo from './mimirlogo.png';
import { useEffect } from 'react';

import { useAuth } from './Auth';

const Navbar = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

    return (
        <div className="navbar shadow-2xl bg-base-200 roundedborders">
        <div className="flex-1">
          <h1>Mímir</h1>
          <Link to="/">
            <img src={ logo } className="App-logo" alt="logo" />
          </Link>
        </div>
        {user && 'id' in user ?
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="mx-2"><Link to="/circuits">Circuits</Link></li>
              <li className="mx-2"><Link to="/sites">Sites</Link></li>
              <li className="mx-2"><Link to="/logout">Logout</Link></li>
            </ul>
          </div> 
        :
          <div>
            <div className='flex-none'>
              <ul className="menu menu-horizontal px-1">
            <li className="mx-2"><Link to="/">Login</Link></li>
              </ul>
            </div>
          </div>  
        }
        </div>
        );
      }
 
export default Navbar;