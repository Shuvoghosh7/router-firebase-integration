import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const{user,handelSingOut}=useFirebase()
    console.log(user)
    return (
        <div className='header'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            { user?.uid ? <button onClick={handelSingOut}>Sing Out</button>:
                <Link to='/login'>Login</Link>
            }
            <span>{user?.displayName && user.displayName}</span>
          </nav>
        </div>
    );
};

export default Header;