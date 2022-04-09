import React from 'react';
import { getAuth} from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth(app);

const Product = () => {
    const[user]=useAuthState(auth)
    return (
        <div>
             <div>
            <h1>This is home</h1>
            <h3>Current user:{user? user.displayName : 'No Body'}</h3>
            <img src={user? user.photoURL:'no user'} alt="" />
        </div>
        </div>
    );
};

export default Product;