import React, { Component } from "react";
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';
export default class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <div className="container p-4">
                    <div className="row">
                        <div className="col my-4">
                            <img src="./images/logo_white.png"/>
                        </div>
                        <div className="col">
                            <ul type="none">
                                <li className="text-primary" id="liTitle">Contact : </li>
                                <li>Contact@prospecat.com</li>
                                <li>Support@prospecat.com</li>
                                <li>Sales@prospecat.com</li>                            
                            </ul>
                        </div>
                        <div className="col">
                            <ul type="none">
                                <li className="text-primary" id="liTitle">Ressources : </li>
                                <li>Blog</li>
                                <li>FAQs</li>
                                <li>Policies and Terms Of Use</li>
                                <li>GDPR</li>
                                <li>Prospecat Extension</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul type="none">
                                <li className="text-primary" id="liTitle">Follow Us : </li>
                            </ul>
                            <FiFacebook className="mx-1" id="icon"/>   
                            <FiTwitter className="mx-1" id="icon"/>                        
                            <FiLinkedin className="mx-1" id="icon"/>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}