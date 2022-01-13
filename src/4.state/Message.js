import React, { Component } from 'react'
import WelcomeOne from '../3.props/WelcomeOne'

 class Message extends Component {

    constructor(){
        super()

        this.state = {
            name: 'Guest',
            message: 'Welcome'
        }
    }

    subscribe(){
        this.setState({
            name: 'Uma',
            message : 'Thank you for suscribing 😇'
        })
    }

    render() {
        const {name, message} = this.state
        return (
            <div>
                <h1>{message}, {name} 😀!!!</h1> 
                <button className='btn btn-primary'
                        onClick={() =>this.subscribe()}
                >Subscribe</button>
                <WelcomeOne message={this.state.message} />
            </div>
        )
    }
}

export default Message
