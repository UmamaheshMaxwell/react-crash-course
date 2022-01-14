import React, { Component } from 'react'

export class UserGreetingTwo extends Component {

    constructor() {
        super()
    
        this.state = {
            isLoggedIn : true ,
            names: []
        }
    }
    
    render() {
        return(
            this.state.isLoggedIn ? <div><h2>Welcome Uma</h2></div>
                                  : <div><h2>Welcome Guest</h2></div>
        )
    }
}

export default UserGreetingTwo
