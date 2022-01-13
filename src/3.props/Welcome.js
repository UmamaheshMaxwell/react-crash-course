import React, { Component } from 'react'

 class Welcome extends Component {
     
    render() {
        const {firstName, lastName, title} = this.props;
        return (
            <div>
                <h1> {firstName} {lastName} is a {title}</h1>
            </div>
        )
    }
}

export default Welcome
