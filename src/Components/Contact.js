import React from 'react';
import { Component } from 'react';

class Contact extends Component{
    constructor(){
        super()
        this.state={message:"Contact Us"}
    }
    changeMessage(){
        this.setState(
            {message:"Thank You for staying with us"}
        )
    }
    render(){
        return(
            <div className="contactstate">
            <h1 onClick={()=>this.changeMessage()}>{this.state.message}</h1>
            </div>
        );
    }
}

export default Contact;