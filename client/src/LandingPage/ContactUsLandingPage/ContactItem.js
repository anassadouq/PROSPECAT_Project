import React, { Component } from "react";
import './Contact.css';
export default class ContactItem extends Component{
    render(){
        return(
            <div className="card col-3 mx-4 my-5 text-center">
                <center>
                    <img src={this.props.img}/>
                    <h5 id="title">{this.props.title}</h5>
                    <p className="text-secondary">{this.props.content}</p>
                    <p id="email">{this.props.email}</p>
                </center>
            </div>
        );
    }
}