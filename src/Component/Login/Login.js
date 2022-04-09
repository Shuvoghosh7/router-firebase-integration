import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const{singinWithGoogle}=useFirebase()
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{margin:'20px'}}>
                <button onClick={singinWithGoogle}>Login With Google</button>
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