import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor() {
        super()
    
        this.state = {
            isLoggedIn : true 
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Welcome Uma</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Welcome Guest</h2>
                </div>
            )
        }

    }
}

export default UserGreeting
