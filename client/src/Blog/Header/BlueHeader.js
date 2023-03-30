import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import './BlueHeader.css';
export default class BlueHeader extends Component{
    render(){
        return(
            <div id="blue">
                <div className="row">
                    <div className="col-7 mx-5">
                        <TfiEmail/><span className="mx-1">Support@prospecat.com</span>
                    </div>
                    <div className="col-4" >
                        <BiSupport/><Link to="/contact" id="logsign">Contact Us</Link>
                        <span className="mx-5">
                            <AiOutlineUser/><Link to="/login" id="logsign" >Login </Link>
                            <Link to="register" id="logsign"> / SignUp</Link>
                        </span>
                    </div>
                </div>              
            </div>
        )
    }
}