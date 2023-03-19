import React, { Component } from "react";
import Blog from "../Blog/Blog";
import './Contact.css';
export default class EmailUs extends Component{
    render(){
        return(
            <center><form id="all" action={Blog}>
                <h2 className="my-5 text-center" id="emailUs">Email Us</h2>

                <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" id="first_name" name="first_name" placeholder="Enter Your First Name" required/>
                </div>

                <div className="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" placeholder="Enter Your Last name" required/>
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Enter Your Email Address" required/>
                </div>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter Your Message" required></textarea>
                </div>

                <div className="form-group">
                    <center><button type="submit" className="btn rounded-pill my-3">Submit</button></center>
                </div>
            </form></center>


        )
    }
}