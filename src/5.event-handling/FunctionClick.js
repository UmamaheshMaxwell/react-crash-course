import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }

    return (
        <div className="container">
            <h2>Event handling using function component</h2>
            <button className="btn btn-primary" onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
