import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const email = event.target.email?.value
        const password = event.target.password?.value

        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h1 className='text-center'>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' />
                <input type="password" name="password" id="" placeholder='pasword' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;