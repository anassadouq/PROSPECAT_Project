import React, { Component } from "react";
//import { SlMagnifier } from "react-icons/sl";
export default class CategorieSearch extends Component{
    render(){
        return(
            <div className="row">
                <div className="form-group col-5">
                    <select className="form-control form-select">
                        <option>Categories</option>
                        <option>Categories</option>
                        <option>Categories</option>
                    </select>
                </div>
                <div className="form-group col-5">
                    <input type="text" className="form-control" placeholder="Search ..."/>
                </div>
            </div>
        )
    }
}