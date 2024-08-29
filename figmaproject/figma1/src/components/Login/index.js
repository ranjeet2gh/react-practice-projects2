import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/axiosInstance';
import "./index.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                navigate("/personal-info");
            }, 500);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="">
            <h1>Login Form</h1>
            <fieldset>
                <form onSubmit={onSubmit}>
                    <div className="onebox">
                        <label for="username">Email*</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter user Name"
                            required
                        />
                    </div>
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

                    <button className='login-btn' type="submit" value="Submit" onClick={(e) => onSubmit(e)}>
                        Log In
                    </button>
                    <p>Don't have an account? Please Sign up! <a href="/register" target="_blank">Sign Up</a></p>

                </form>
            </fieldset>
        </div>
    )
}

export default Login
