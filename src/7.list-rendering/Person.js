import React from 'react'

function Person(props) {
    const {id, name, age, skill } = props.person
    return (
        <div>
            <h2 key={id}> {name} is {age} years old and good with {skill}</h2> 
        </div>
    )
}

export default Person
