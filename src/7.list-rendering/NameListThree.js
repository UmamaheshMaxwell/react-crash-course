import React from 'react'
import Person from './Person'

function NameListThree() {
    const persons =[
        {
            id:1,
            name: 'Scott',
            age:45,
            skill: 'React'
        },
        {
            id:2,
            name: 'Adam',
            age:44,
            skill: 'Angular'
        },
        {
            id:3,
            name: 'Tuan',
            age:42,
            skill: 'C#'
        },
        {
            id:4,
            name: 'Uma',
            age:39,
            skill: 'Javascript'
        },
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return personList
}

export default NameListThree
