import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth} from 'firebase/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Home = () => {
    const[user]=useAuthState(auth)
    return (
        <div>
            <h1>This is home</h1>
            <h3>Current user:{user? user.displayName : 'No Body'}</h3>
        </div>
    );
};

export default Home;