import React from 'react'
import WelcomeOne from '../1.components/2.class/WelcomeOne'

function Greeting(props) {
    console.log(props)
    let {name, skill} = props
    return (
        <div>
            <div> {name} is a {skill} {props.children}</div> 
        </div>
    )
}

export default Greeting
