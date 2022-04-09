import React from 'react';
import useFirebase from '../Hooks/useFirebase';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init'
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app);
const Login = () => {
    const[signInWithGoogle,user]= useSignInWithGoogle(auth)
    const location=useLocation()
    const nevigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handelGooglesinin =()=>{
        signInWithGoogle()
        .then(()=>{
            nevigate(from,{ replace: true })
        })
    }
    
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{margin:'20px'}}>
                <button onClick={handelGooglesinin } >Login With Google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='enter your password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;