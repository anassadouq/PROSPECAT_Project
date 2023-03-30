import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import './Register.css'
export default function Register() {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const register = () => {
        if (firstName && lastName && jobTitle && company && email && password && confirmPassword){
            Axios.post("http://localhost:3001/register", {
                firstName,lastName,jobTitle,company,email,password,confirmPassword,
            }).then((res) => {
                setUsers((prevUsers) => [...prevUsers, res.data]);
            });
            navigate("/login");
        }
    };
    const isDisabled = () => {
        return !(firstName && lastName && jobTitle && company && email && password && confirmPassword);
    };

    return (
        <div>
            <center>
                <h2 className="text-center my-3">Welcome to Prospecat</h2>
            </center>
            <div className="row">
                <div className="col-6 bg-primary text-light">
                    <div className="row container">
                        <div className="col-6">
                            <Link to="/register" className="text-light"><h3 className="mx-3">Create Account</h3></Link>
                        </div>
                        <div className="col-6">
                            <Link to="/login" className="text-light"><h3 className="mx-3">Login</h3></Link>
                        </div>  

                        <div className="col-6">
                            <img className="my-5" src="./images/google.png"/>
                        </div>
                        <div className="col-6">
                            <img className="my-5" src="./images/link.png"/>
                        </div>  
                        <div className="col-6">
                            <label className="text-light">Fisrt Name</label>
                            <input id="input" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="col-6">
                            <label className="text-light">Last Name</label>
                            <input id="input" type="text" placeholder="First Name" onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col-6">
                            <label className="text-light">Job Title</label>
                            <input id="input" type="text" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)}/>
                        </div>
                        <div className="col-6">
                            <label className="text-light">Company</label>
                            <input id="input" type="text" placeholder="Company" onChange={(e) => setCompany(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col-12">
                            <label className="text-light">Email</label>
                            <input id="input" type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col-6">
                            <label className="text-light">Password</label>
                            <input  id="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="col-6">
                            <label className="text-light">Compfirm Password</label>
                            <input id="input" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                    <center>
                        <button className="btn btn-success rounded-pill" id="button" onClick={register} disabled={isDisabled()}>Create Account</button>
                        <p className="text-light my-2">Already have an account? <Link to="/login" className="text-light">Go to Login page</Link></p>
                    </center>
                </div>
                <div className="col-6">
                    <img src="./images/login.png"/>
                </div>
            </div>
        </div>
    );
}