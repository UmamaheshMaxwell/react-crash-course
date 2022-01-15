import React, { Component } from 'react'
import UserApi from '../11.api-calls/UserApi'

export class UserGreeting extends Component {

    constructor() {
        super()
    
        this.state = {
            isLoggedIn : false 
        }
    }

    componentDidMount(){
        this.getuserInfo()
    }

    getuserInfo =() =>{
        // API Call using Token 
        fetch("https://jsonplaceholder.typicode.com/todos/3")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                isLoggedIn : data.completed,

            })
        })
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return (
                
                <div>
                    {/* <h2>Welcome Uma</h2> */}
                     <UserApi  />
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
