import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/axiosInstance';
import "./index.css"


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/signup', { username, email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/personal-info');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    return (
        <div className="">
            <h1>Register Form</h1>
            <fieldset>
                <form onSubmit={onSubmit}>
                    <div className="onebox">
                        <label for="username">User Name*</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter user Name"
                            required
                        />
                    </div>
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <label for="password">Enter password* </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        minLength="4" maxLength="10"
                        required
                    />
                    <button className='signUpBtn' type="submit" value="Submit" onClick={(e) => onSubmit(e)}>
                        Sign Up
                    </button>
                    <p>
                        {"If you already has an account, just sign in. "}
                        <a href='/login'>Log In</a>
                    </p>
                </form>
            </fieldset>
        </div>
    )
}

export default Register
