import React from 'react'

function NameListTwo() {
    const names = ["Bruce", "Clarck", "Diana"]
    const nameList = names.map((name, index) =><h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default NameListTwo
