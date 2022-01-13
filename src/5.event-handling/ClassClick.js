import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Click the Button')
    }

    render() {
        return (
            <div>
                <h2>Click event using class component</h2>
                <button className="btn btn-primary"
                        onClick={this.clickHandler}
                >Click Me</button>
            </div>
        )
    }
}

export default ClassClick
