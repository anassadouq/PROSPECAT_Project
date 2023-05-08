import React, { Component } from "react";
export default class CategorieSearch extends Component{
    render(){
        return(
            <div className="row">
                <div className="form-group col-5">
                    <select className="form-control form-select">
                        <option>Categories</option>
                        <option>Categorie 1</option>
                        <option>Categorie 2</option>
                        <option>Categorie 3</option>
                        <option>Categorie 4</option>
                        <option>Categorie 5</option>
                    </select>
                </div>
                <div className="form-group col-5">
                    <input type="text" className="form-control" placeholder="Search ..."/>
                </div>
            </div>
        )
    }
}