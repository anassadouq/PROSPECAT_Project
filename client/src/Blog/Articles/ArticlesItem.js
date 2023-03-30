import React, { Component } from "react";
import { CiUser } from "react-icons/ci";
import './Articles.css'; 
export default class ArticlesItem extends Component{
    render(){
        return(
            <div className="card flex-row col-5 mx-4 my-4">
                <img src={this.props.img}/>
                <div className="card-body">
                    <button className="btn btn-primary card-title h5 h4-sm">GROWTH</button><br/>
                    <b>{this.props.title}.</b><br/>
                    <CiUser id="by"/>&nbsp;
                    <span id="by">By {this.props.by}<p className="mx-3 text-secondary">{this.props.date}</p></span> 
                    <p className="text-secondary">{this.props.content}.</p>
                </div>
            </div>
        );
    }
}