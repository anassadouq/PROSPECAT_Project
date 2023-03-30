import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AccountService} from './AccountService'
import axios from 'axios';
import './Register.css';
import { Link } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("");
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        setErrorMessage("");
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        axios.post('http://localhost:3001/login', credentials)
        .then(res => {
            console.log(res)
            AccountService.saveToken(res.data.token)
            navigate('/admin_pricingPlan')
        })
        .catch(error => {
            console.log(error);
            setErrorMessage("Email or Password incorrect. Please try again.");
        });
    }
    
    return (
        <form className='my-3' onSubmit={onSubmit}>
            <center>
                <h2 className="text-center my-3">Welcome to Prospecat</h2>
            </center>
            <div className="row">
                <div className='col-6 bg-primary'>
                    <div className='row container'>
                        <div className="col-6">
                            <Link to="/register" className="text-light"><h3 className="mx-3">Create Account</h3></Link>
                        </div>
                        <div className="col-6">
                            <Link to="/login" className="text-light"><h3 className="mx-3">Login</h3></Link>
                        </div> 

                        <div className="col-6">
                            <img className="my-5" src="./images/loggoogle.png"/>
                        </div>
                        <div className="col-6">
                            <img className="my-5" src="./images/loglink.png"/>
                        </div>
                    
                    <div className='col-12'>
                        <label className="text-light">Email</label>
                        <input id="input" type="text" name="email" value={credentials.email} onChange={onChange} placeholder="Enter Your Email Address"/>
                    </div>
                    <div className='col-12'>
                        <label className="text-light">Password</label>
                        <input id="input" type="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter Your Password"/>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        <center>
                            <button className="btn btn-success rounded-pill my-4" id="button">Login</button>
                            <p className='text-light my-2'>Forgot your password ? </p>
                        </center>
                        
                    </div>
                    </div>
                </div>
                <div className='col-6'>
                    <img src="./images/login.png"/>
                </div>
            </div>
        </form>
    );
};