import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register Now</h1>
            <form>
                <input type="text" placeholder='Input your Name' />
                <br />
                <input type="email" name="" id=""  placeholder='enter your email'/>
                <br />
                <input type="password" name="" id="" placeholder='enter your password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;