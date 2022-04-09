import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import { getAuth,signOut } from 'firebase/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Header = () => {
    
   const [user]=useAuthState(auth)
    return (
        <div className='header'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/order'>Order</Link>
            <Link to='/register'>Register</Link>
            { user?.uid ? <button onClick={()=>signOut (auth)}>Sing Out</button>:
                <Link to='/login'>Login</Link>
            }
             {
              user && <>
              <Link to='/VIP'>VIP</Link>
              </>
             }
            <span>{user?.displayName && user.displayName}</span>
          </nav>
        </div>
    );
};

export default Header;