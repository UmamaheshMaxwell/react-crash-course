import React, { Component } from 'react'

export class UserGreetingOne extends Component {

    constructor() {
        super()
    
        this.state = {
            isLoggedIn : false 
        }
    }
    
    render() {
        // Using Element variables
        let message;
        if(this.state.isLoggedIn){
            message =  <div><h2>Welcome Uma</h2></div>
        } else {
            message =  <div><h2>Welcome Guest</h2></div> 
        }
        return message
    }
}

export default UserGreetingOne
