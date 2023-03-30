import React,{Component} from "react";
import ContactInfo from "./ContactInfo";
import ContactItem from "./ContactItem";
export default class Contact extends Component{
    constructor(){
        super()
        this.state = { ContactInfo : ContactInfo }
    }
    mapping(x){
        const ContactLanding = x.map ( member => 
        <ContactItem
            key={member.id}
            img={member.img}
            title={member.title}
            content={member.content}
            email={member.email}
        />);
        return ContactLanding;  
    }
    render(){
        return(
            <div className="row">
                {this.mapping(this.state.ContactInfo)}
            </div>
        )
    }
}